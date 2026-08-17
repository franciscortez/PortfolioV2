import { ContactFormClient } from "@/components/sections/contact/contact-form-client";

export function ContactForm() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  const isConfigured = Boolean(accessKey);

  return (
    <ContactFormClient isConfigured={isConfigured} accessKey={accessKey} />
  );
}
