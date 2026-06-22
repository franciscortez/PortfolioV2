import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactOverview } from "@/components/sections/contact/contact-overview";
import { ToastContainer } from "@/components/ui/toast";

export function ContactPage() {
  return (
    <>
      <ToastContainer />
      <div className="space-y-6">
        <ContactOverview />
        <ContactForm />
      </div>
    </>
  );
}
