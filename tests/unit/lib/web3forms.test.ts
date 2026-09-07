import { afterEach, describe, expect, it, vi } from "vitest";
import { submitContactForm, WEB3FORMS_ENDPOINT } from "@/lib/web3forms";

const formData = () => {
  const form = new FormData();
  form.set("name", "Contact Test");
  form.set("email", "test@example.com");
  form.set("subject", "Test");
  form.set("message", "Test message");
  return form;
};
afterEach(() => vi.unstubAllGlobals());

describe("Web3Forms browser submission", () => {
  it("sends the fields and form key directly to the provider", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValue(Response.json({ success: true }));
    vi.stubGlobal("fetch", fetchMock);
    await submitContactForm(formData(), "public-test-key");
    expect(fetchMock).toHaveBeenCalledWith(
      WEB3FORMS_ENDPOINT,
      expect.objectContaining({
        method: "POST",
        signal: expect.any(AbortSignal),
      })
    );
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({
      name: "Contact Test",
      email: "test@example.com",
      subject: "Test",
      message: "Test message",
      access_key: "public-test-key",
    });
  });

  it.each([null, [], {}, { success: "true" }, { success: false }])(
    "never treats malformed or rejected payload %j as success",
    async (payload) => {
      vi.stubGlobal("fetch", vi.fn().mockResolvedValue(Response.json(payload)));
      await expect(submitContactForm(formData(), "test-key")).rejects.toThrow();
    }
  );

  it("does not treat a failed HTTP status as success", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue(Response.json({ success: true }, { status: 500 }))
    );
    await expect(submitContactForm(formData(), "test-key")).rejects.toThrow();
  });

  it("handles the HTML challenge that broke the server proxy", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue(
          new Response("<html>Just a moment...</html>", { status: 403 })
        )
    );
    await expect(submitContactForm(formData(), "test-key")).rejects.toThrow(
      "could not confirm your message"
    );
  });

  it("preserves the provider rejection message", async () => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue(
          Response.json(
            { success: false, message: "Please verify your email." },
            { status: 400 }
          )
        )
    );
    await expect(submitContactForm(formData(), "test-key")).rejects.toThrow(
      "Please verify your email."
    );
  });
});
