export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContactForm(formData: FormData, accessKey: string) {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      ...Object.fromEntries(formData),
      access_key: accessKey,
    }),
    signal: AbortSignal.timeout(15000),
  });

  let result: unknown;
  try {
    result = await response.json();
  } catch {
    throw new Error(
      "The contact service could not confirm your message. Please use the email link above."
    );
  }

  if (!result || typeof result !== "object" || !("success" in result)) {
    throw new Error(
      "The contact service could not confirm your message. Please use the email link above."
    );
  }

  if (!response.ok || result.success !== true) {
    throw new Error(
      "message" in result &&
        typeof result.message === "string" &&
        result.message.trim()
        ? result.message
        : "Your message was not accepted. Please try again or use the email link above."
    );
  }
}
