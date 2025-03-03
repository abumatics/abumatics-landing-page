import { useState, FormEvent } from "react";

// Define the type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<string>("");  // For status messages

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyH24LukHqjp86GjtTLbj9se3h72xff44FfsxNoafJ35XjI5eG1bKj7Rx2QiISp8jSW/exec", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("Form submitted successfully!");
        form.reset();  // Clear form fields
      } else {
        setFormStatus("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-muted/50 dark:bg-gray-800 dark:border-muted/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-800 dark:text-gray-100">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            className="w-full px-6 py-3 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-800 dark:text-gray-100">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email address"
            className="w-full px-6 py-3 border rounded-lg"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-lg font-medium text-gray-800 dark:text-gray-100">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Write your message here"
          className="w-full px-6 py-3 border rounded-lg"
        ></textarea>
      </div>
      <button type="submit" className="w-full bg-primary text-white py-3 px-8 rounded-md">Send Message</button>
      {formStatus && <p className="text-center text-sm mt-4">{formStatus}</p>}
    </form>
  );
};

export default ContactForm;
