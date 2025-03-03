import { About } from "./components/About";
import { ContactUs } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
// import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
// import { Newsletter } from "./components/Newsletter";
// import { Pricing } from "./components/Pricing";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
// import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
// import { Testimonials } from "./components/Testimonials";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      {/* <HowItWorks /> */}
      <Features />
      <Services />
      <Team />
      <ContactUs />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

// import { About } from "./components/About";
// import { ContactForm } from "./components/ContactForm";  // Updated import for ContactForm
// import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
// import { Footer } from "./components/Footer";
// import { Hero } from "./components/Hero";
// import { Navbar } from "./components/Navbar";
// import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
// import { Team } from "./components/Team";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Features />
//       <Services />
//       <Team />
//       <ContactForm />  {/* Updated to use ContactForm instead of ContactUs */}
//       <FAQ />
//       <Footer />
//       <ScrollToTop />
//     </>
//   );
// }

// export default App;

// import { About } from "./components/About";
// import { ContactUs } from "./components/Cta";
// import { FAQ } from "./components/FAQ";
// import { Features } from "./components/Features";
// import { Footer } from "./components/Footer";
// import { Hero } from "./components/Hero";
// import { Navbar } from "./components/Navbar";
// import { ScrollToTop } from "./components/ScrollToTop";
// import { Services } from "./components/Services";
// import { Team } from "./components/Team";
// import { ContactForm } from "./components/ContactForm";  // Import ContactForm
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Features />
//       <Services />
//       <Team />
//       <ContactUs />
//       <h1 className="text-2xl font-bold text-center mt-8">Contact Us</h1>  {/* Optional Title */}
//       <ContactForm />  {/* Add Contact Form here */}
//       <FAQ />
//       <Footer />
//       <ScrollToTop />
//     </>
//   );
// }

// export default App;
