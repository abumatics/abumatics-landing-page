import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import avatar from "../assets/avatar.jpg";
import girlavatar from "../assets/girlavatar.png";
import Abeed from "../assets/Abeed.png";
import areeb from "../assets/areeb.png";
import naveed2 from "../assets/naveed2.jpg";
import wakas from "../assets/wakas.jpg";
//import { Avatar } from "@radix-ui/react-avatar";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: naveed2,
    name: "Naveed Damudi",
    position: "Founder",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/naveed-damudi-45a98b42?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      // {
      //   name: "Facebook",
      //   url: "https://www.facebook.com/",
      // },
      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/",
      // },
    ],
  },
  {
    imageUrl: wakas,
    name: "Ahmed Wakas",
    position: "HR Consultant",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/syed-ahmed-wakas-7a4b554b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/umerekkery_/",
      // },
    ],
  },
  
  {
    imageUrl: areeb,
    name: "Areeb Ahmed",
    position: "Business Automation and IT Head",
    socialNetworks: [
      // {
      //   name: "Linkedin",
      //   url: "https://www.linkedin.com/in/azharuddin-ali-7a0b68274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // },
    ],
  },
  {
    imageUrl: Abeed,
    name: "Abeed",
    position: "IT Consultant",
    socialNetworks: [
      //{
        //name: "Linkedin",
        //url: "https://www.linkedin.com/in/syed-ahmed-wakas-7a4b554b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      //},
      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/umerekkery_/",
      // },
    ],
  },
  {
    imageUrl: girlavatar,
    name: "Razina Katingeri",
    position: "Performance and Operations Coordinator",
    socialNetworks: [
      // {
      //   name: "Linkedin",
      //   url: "https://www.linkedin.com/in/asmeer-ahmed-0054b324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // },
      // {
      //   name: "Facebook",
      //   url: "https://www.facebook.com/",
      // },
      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/",
      // },
    ],
  },
  {
    imageUrl: girlavatar,
    name: "Akshata S. Naik",
    position: "Data Entry Head",
    socialNetworks: [
      // {
      //   name: "Linkedin",
      //   url: "https://www.linkedin.com/in/asil-ali-akbar-065209231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      // },
      // {
      //   name: "Facebook",
      //   url: "https://www.facebook.com/",
      // },
      // {
      //   name: "Instagram",
      //   url: "https://www.instagram.com/",
      // },
    ],
  },
  
  
  
  {
     imageUrl: girlavatar,
     name: "Nayana P. Naik",
     position: "Data Entry",
     socialNetworks: [
      // {
      //   name: "Linkedin",
     //   url: "https://www.linkedin.com/in/leopoldo-miranda/",
      // },

  //     {
  //       name: "Instagram",
  //       url: "https://www.instagram.com/inshal_armar/",
  //     },
   ],
   },
  {
   imageUrl: girlavatar,
     name: "Bhoomika V. Naik",
    position: "Data Entry",
    socialNetworks: [
  //     // {
  //     //   name: "Linkedin",
  //     //   url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     // },
      //{
  //       name: "Instagram",
  //       url: "https://www.instagram.com/its.nawazz/",
      // },
   ],
  },
  
  {
     imageUrl: girlavatar,
     name: "Anita M. Naik",
     position: "Data Entry",
    socialNetworks: [
  //     // {
  //     //   name: "Linkedin",
  //     //   url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     // },
  //     {
  //       name: "Instagram",
  //       url: "https://www.instagram.com/abdullah__quazi/",
  //     },
     ],
   },
  
   {
     imageUrl:  girlavatar,
     name: "Shweta N. Moger",
     position: "Data Entry",
    socialNetworks: [
  //     // {
  //     //   name: "Linkedin",
  //     //   url: "https://www.linkedin.com/in/leopoldo-miranda/",
  //     // },
  //     {
  //       name: "Instagram",
  //       url: "https://www.instagram.com/abdullah__quazi/",
  //     },
     ],
   },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
      Our team is made up of passionate, skilled, and experienced professionals who work together to deliver exceptional results. With diverse backgrounds and expertise, we bring creativity, innovation, and collaboration to every project.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
