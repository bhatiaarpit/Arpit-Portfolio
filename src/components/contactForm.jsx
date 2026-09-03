import { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { X, CheckCircle, Send, Loader } from "lucide-react";

const ContactPopup = ({ isOpen, onClose }) => {
  const [state, handleSubmit] = useForm("meqyyjqv");
  const closeRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", subject: "", message: "" });
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  const fieldClass =
    "w-full rounded-md border border-graphite-line bg-graphite px-4 py-3 text-graphite-ink placeholder:text-graphite-faint focus:border-graphite-ink";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-graphite-line bg-graphite-raised"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-graphite-line p-5">
          <h2 id="contact-title" className="font-serif text-2xl text-graphite-ink">
            Get in touch
          </h2>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-md p-2 text-graphite-mute hover:text-graphite-ink"
            aria-label="Close contact form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5">
          {state.succeeded && (
            <div className="mb-5 flex items-center gap-2 rounded-md border border-graphite-line p-3 text-sm text-graphite-ink" role="status">
              <CheckCircle className="h-5 w-5" aria-hidden="true" />
              Thanks — I’ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm text-graphite-mute">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={fieldClass}
                  autoComplete="name"
                  required
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-400" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm text-graphite-mute">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={fieldClass}
                  autoComplete="email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-400" />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="mb-1.5 block text-sm text-graphite-mute">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={fieldClass}
                required
              />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} className="mt-1 text-sm text-red-400" />
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-1.5 block text-sm text-graphite-mute">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className={`${fieldClass} resize-y`}
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-400" />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-graphite-ink px-6 py-3 text-sm font-medium text-graphite disabled:cursor-not-allowed disabled:opacity-50"
            >
              {state.submitting ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Sending
                </>
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
            <ValidationError errors={state.errors} className="text-center text-sm text-red-400" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
