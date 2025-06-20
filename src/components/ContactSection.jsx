import { Mail, MapPin, Phone, Github, Send } from "lucide-react";
import { Linkedin } from "lucide-react";
import { cn } from "@/libs/utils";
import { useRef } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8ig858k",   // e.g. service_abc123
        "template_f0smdup",  // e.g. template_xyz456
        formRef.current,
        "gYMfRJn9zBlMl7eBi"    // e.g. xzT5O9vKJ6jN8
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        formRef.current.reset();
      })
      .catch((error) => {
        toast({
          title: "Send Failed",
          description: "Something went wrong. Please try again later.",
        });
        console.error("EmailJS Error:", error);
      });
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
          {/* LEFT - CONTACT INFO */}
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
                    href="tel:+34 641 924 789"
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
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Barcelona, Spain
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4>Connect with Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/shreyas-girish-67677b134/"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://github.com/ShreyasG30"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
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
                  required
                  name="title"
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
                className={cn("cosmic-button w-full", "flex items-center justify-center gap-2")}
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
