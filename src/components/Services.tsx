import { useInView } from "react-intersection-observer";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import {
  WebDevelopmentIcon,
  EcommerceIcon,
  AdvertisementIcon,
  SocialMediaIcon,
} from "./Icons";
import services from "../assets/Services.png";

// Example images for larger screens
import webImage from "../assets/servicesimg/1.png";
import ecommerceImage from "../assets/servicesimg/3.png";
import advertisementImage from "../assets/servicesimg/4.png";
import socialMediaImage from "../assets/servicesimg/5.png";

interface ServiceProps {
  title: string;
  description: string;
  points?: string[];
  icon: JSX.Element;
  image: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Web Development",
    description:
      "Create stunning, responsive websites tailored to your brand's identity and goals.",
    points: ["IT Consultation", "Static Website Development", "Dynamic Website Development"],
    icon: <WebDevelopmentIcon />,
    image: webImage,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Build and manage your online store with ease, featuring user-friendly design and functionality.",
    points: [
      "Product Listing",
      "Product Photography",
      "Product Shoot",
      "Account Setup",
    ],
    icon: <EcommerceIcon />,
    image: ecommerceImage,
  },
  {
    title: "Advertisements",
    description:
      "Reach your target audience with impactful and creative ad campaigns.",
    points: ["Meta Ads", "YouTube Ads", "Google Ads"],
    icon: <AdvertisementIcon />,
    image: advertisementImage,
  },
  {
    title: "Social Media Management",
    description:
      "Elevate your online presence with strategic social media management and content creation.",
    points: [
      "SEO",
      "Video Editing (Short-form Content)",
      "Graphic Designing",
      "Instagram, Facebook, TikTok, X, Threads, LinkedIn",
    ],
    icon: <SocialMediaIcon />,
    image: socialMediaImage,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      {/* Text Section */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Our{" "}
          </span>
          Services
        </h2>

        {/* Mobile Image Section */}
        <img
          src={services}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain block lg:hidden mx-auto"
          alt="Services Visual"
          loading="lazy"
        />

        <p className="text-muted-foreground text-xl mt-4 mb-8 text-center">
          Providing comprehensive solutions to meet your business needs with
          quality and efficiency.
        </p>
      </div>

      {/* Service Cards Section with 2x2 Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {serviceList.map(({ icon, title, description, points, image }) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });

          return (
            <Card
              key={title}
              ref={ref}
              className={`hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 ${
                inView ? "opacity-100" : "opacity-50"
              }`}
            >
              <CardHeader className="space-y- flex flex-col justify-start items-start gap-4">
                {/* Mobile: Show Icon, Desktop: Show Image */}
                <div className="w-[50px] md:w-[75px] lg:w-[150px] xl:w-[200px] hidden lg:block">
                  <img
                    src={image}
                    alt={`${title} Image`}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="mt-1 bg-primary/20 p-1 rounded-2xl lg:hidden">
                  {icon}
                </div>
                <div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-md mt-2">
                    <p>{description}</p>
                    {points && (
                      <ul className="list-disc list-inside mt-2">
                        {points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter></CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
