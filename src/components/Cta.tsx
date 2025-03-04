// import { Button } from "./ui/button";

// export const ContactUs = () => {
//   return (
//     <section
//       id="contact-us"
//       className="bg-gradient-to-r from-primary/10 via-muted/20 to-primary/10 py-16 my-24 sm:my-32 dark:bg-gradient-to-r dark:from-primary/20 dark:via-muted/10 dark:to-primary/20"
//     >
//       <div className="container lg:grid lg:grid-cols-2 gap-12 lg:gap-16 place-items-center">
//         {/* Contact Details Section */}
//         <div className="lg:col-start-1 space-y-6">
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left text-gray-900 dark:text-gray-100">
//             Get In Touch
//             <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
//               {" "}
//               We'd Love to Hear from You
//             </span>
//           </h2>
//           <p className="text-muted-foreground text-lg sm:text-xl mt-4 mb-8 text-center sm:text-left dark:text-muted-foreground">
//             Have a question or need assistance? Feel free to reach out to us
//             through the form below or contact us via the details provided.
//           </p>

//           <div className="text-muted-foreground space-y-4 dark:text-muted-foreground">
//             <p className="text-lg text-center sm:text-left">
//               Email:{" "}
//               <span className="text-primary hover:underline dark:text-primary">
//                 support@abumatics.com
//               </span>
//             </p>
//             <p className="text-lg text-center sm:text-left">
//               Phone:{" "}
//               <span className="text-primary hover:underline dark:text-primary">
//                 +91 86608 22267
//               </span>
//             </p>
//             <p className="text-lg text-center sm:text-left dark:text-gray-400">
//               Address: Abumatics, Moulana Azad Road, Bhatkal 581320
//             </p>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div className="space-y-6 lg:col-start-2">
//           <h3 className="text-2xl font-semibold text-center sm:text-left mb-4 text-gray-900 dark:text-gray-100">
//             Send Us a Message
//           </h3>
//          <form name="contact" method="POST" action="https://script.google.com/macros/s/AKfycbyH24LukHqjp86GjtTLbj9se3h72xff44FfsxNoafJ35XjI5eG1bKj7Rx2QiISp8jSW/exec" className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-muted/50 dark:bg-gray-800 dark:border-muted/60">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-lg font-medium text-gray-800 dark:text-gray-100"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
//                   required
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-lg font-medium text-gray-800 dark:text-gray-100"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
//                   required
//                   placeholder="Enter your email address"
//                 />
//               </div>
//             </div>

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-lg font-medium text-gray-800 dark:text-gray-100"
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={6}
//                 className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
//                 required
//                 placeholder="Write your message here"
//               ></textarea>
//             </div>

//             <Button
//               type="submit"
//               className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white py-3 px-8 text-lg rounded-md shadow-md transition-all duration-300 dark:bg-primary dark:hover:bg-primary/90"
//             >
//               Send Message
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

//Chat Gpt
import { useState } from "react";
import { Button } from "./ui/button";

export const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then(() => {
        setIsSubmitted(true);
        form.reset(); // Clear form fields after submission
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact-us"
      className="bg-gradient-to-r from-primary/10 via-muted/20 to-primary/10 py-16 my-24 sm:my-32 dark:bg-gradient-to-r dark:from-primary/20 dark:via-muted/10 dark:to-primary/20"
    >
      <div className="container lg:grid lg:grid-cols-2 gap-12 lg:gap-16 place-items-center">
        {/* Contact Details Section */}
        <div className="lg:col-start-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center sm:text-left text-gray-900 dark:text-gray-100">
            Get In Touch
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              We'd Love to Hear from You
            </span>
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl mt-4 mb-8 text-center sm:text-left dark:text-muted-foreground">
            Have a question or need assistance? Feel free to reach out to us
            through the form below or contact us via the details provided.
          </p>

          <div className="text-muted-foreground space-y-4 dark:text-muted-foreground">
            <p className="text-lg text-center sm:text-left">
              Email:{" "}
              <span className="text-primary hover:underline dark:text-primary">
                support@abumatics.com
              </span>
            </p>
            <p className="text-lg text-center sm:text-left">
              Phone:{" "}
              <span className="text-primary hover:underline dark:text-primary">
                +91 86608 22267
              </span>
            </p>
            <p className="text-lg text-center sm:text-left dark:text-gray-400">
              Address: Abumatics, Moulana Azad Road, Bhatkal 581320
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="space-y-6 lg:col-start-2">
          <h3 className="text-2xl font-semibold text-center sm:text-left mb-4 text-gray-900 dark:text-gray-100">
            Send Us a Message
          </h3>
          <form
            name="contact"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbzmea-nT3kdhKzK_VumahFrgJLGMuC-qXplwzZ29TgiDeA-I_t3OhyRbbMkbtgnXF72/exec"
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-muted/50 dark:bg-gray-800 dark:border-muted/60"
            onSubmit={handleSubmit}
          >
            {/* Hidden field for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-800 dark:text-gray-100"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-800 dark:text-gray-100"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
                  required
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-800 dark:text-gray-100"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
                required
                placeholder="Write your message here"
              ></textarea>
            </div>

            <Button
              type="submit"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white py-3 px-8 text-lg rounded-md shadow-md transition-all duration-300 dark:bg-primary dark:hover:bg-primary/90"
            >
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};


//deepseak
// import { Button } from "./ui/button";

// export const ContactUs = () => {
//   return (
//     <section
//       id="contact-us"
//       className="bg-gradient-to-r from-primary/10 via-muted/20 to-primary/10 py-16 my-24 sm:my-32 dark:bg-gradient-to-r dark:from-primary/20 dark:via-muted/10 dark:to-primary/20"
//     >
//       <div className="container lg:grid lg:grid-cols-2 gap-12 lg:gap-16 place-items-center">
//         {/* Contact Details Section (Keep as-is) */}
//         {/* ... */}

//         {/* Modified Contact Form Section */}
//         <div className="space-y-6 lg:col-start-2">
//           <h3 className="text-2xl font-semibold text-center sm:text-left mb-4 text-gray-900 dark:text-gray-100">
//             Send Us a Message
//           </h3>
//           <form 
//             name="contact" 
//             method="POST" 
//             action="https://script.google.com/macros/s/AKfycbyH24LukHqjp86GjtTLbj9se3h72xff44FfsxNoafJ35XjI5eG1bKj7Rx2QiISp8jSW/exec" 
//             className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-muted/50 dark:bg-gray-800 dark:border-muted/60"
//             onSubmit={async (e) => {
//               e.preventDefault();
//               const formData = new FormData(e.currentTarget);
//               const data = Object.fromEntries(formData.entries());

//               // Honeypot spam protection
//               if (data.honeypot) return;

//               try {
//                 const response = await fetch(e.currentTarget.action, {
//                   method: "POST",
//                   body: JSON.stringify(data),
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                 });

//                 const result = await response.json();
//                 if (result.result === "success") {
//                   alert("Message sent successfully!");
//                   e.currentTarget.reset();
//                 } else {
//                   alert(`Error: ${result.message}`);
//                 }
//               } catch (error) {
//                 console.error("Submission error:", error);
//                 alert("Failed to send message. Please try again.");
//               }
//             }}
//           >
//             {/* Hidden Honeypot Field */}
//             <input type="text" name="honeypot" style={{ display: "none" }} />

//             {/* Your Existing Form Fields */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               {/* Name Input */}
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-lg font-medium text-gray-800 dark:text-gray-100"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
//                   required
//                   placeholder="Enter your full name"
//                 />
//               </div>

//               {/* Email Input */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-lg font-medium text-gray-800 dark:text-gray-100"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
//                   required
//                   placeholder="Enter your email address"
//                 />
//               </div>
//             </div>

//             {/* Message Textarea */}
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-lg font-medium text-gray-800 dark:text-gray-100"
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={6}
//                 className="w-full px-6 py-3 border border-muted/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-200 dark:bg-gray-700 dark:border-muted/60 dark:text-gray-100 dark:focus:ring-primary"
//                 required
//                 placeholder="Write your message here"
//               ></textarea>
//             </div>

//             <Button
//               type="submit"
//               className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white py-3 px-8 text-lg rounded-md shadow-md transition-all duration-300 dark:bg-primary dark:hover:bg-primary/90"
//             >
//               Send Message
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };