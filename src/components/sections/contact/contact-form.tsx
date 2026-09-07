import { ContactFormClient } from "@/components/sections/contact/contact-form-client";

export function ContactForm() {
  // Web3Forms form access keys are public identifiers intended for browser use.
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
    "";

  return <ContactFormClient accessKey={accessKey} />;
}
