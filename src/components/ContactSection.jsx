import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Github, Send, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/libs/utils";
import { toast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const EMAILJS_SERVICE_ID = "service_8ig858k";
  const EMAILJS_TEMPLATE_ID = "template_f0smdup";
  const EMAILJS_PUBLIC_KEY = "gYMfRJn9zBlMl7eBi";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current || isSending) return;

    setIsSending(true);

    try {
      const formData = new FormData(formRef.current);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const subject = String(formData.get("title") || "").trim();
      const message = String(formData.get("message") || "").trim();

      // Include common alias keys so different EmailJS template variable names still resolve.
      const templateParams = {
        name,
        from_name: name,
        user_name: name,
        email,
        from_email: email,
        reply_to: email,
        user_email: email,
        title: subject,
        subject,
        message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      const details = error?.text || error?.message || "Unknown error";
      toast({
        title: "Send Failed",
        description: `Email service error: ${details}`,
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail size={20} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a
                    href="mailto:shreyasgirish30@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    shreyasgirish30@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone size={20} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <a
                    href="tel:+34641924789"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 641 924 789
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin size={20} className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <span className="text-muted-foreground">Barcelona, Spain</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4>Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/shreyas-girish-67677b134/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="h-6 w-6 text-primary" />
                </a>

                <a
                  href="https://github.com/ShreyasG30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSending && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
