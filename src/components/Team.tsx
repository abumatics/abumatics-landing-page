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
import azhar from "../assets/azhar.jpg";

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
    imageUrl: avatar,
    name: "Naveed Damudi",
    position: "Founder",
    socialNetworks: [{ name: "Instagram", url: "https://www.instagram.com/" }],
  },
  {
    imageUrl: azhar,
    name: "Naveed Damudi",
    position: "Founder",
    socialNetworks: [{ name: "Instagram", url: "https://www.instagram.com/" }],
  },
  {
    imageUrl: avatar,
    name: "Sawood Shuraim",
    position: "Founder",
    socialNetworks: [{ name: "Instagram", url: "https://www.instagram.com/" }],
  },
  {
    imageUrl: avatar,
    name: "Abdul Majeed",
    position: "Tech Lead",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/majeed-mohtesham/" },
      { name: "Instagram", url: "https://www.instagram.com/its_majeed/" },
    ],
  },
  {
    imageUrl: avatar,
    name: "Umer Ekkeri",
    position: "Marketing Specialist",
    socialNetworks: [{ name: "Instagram", url: "https://www.instagram.com/umerekkery_/" }],
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
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Our team is made up of passionate, skilled, and experienced professionals who work together to deliver exceptional results.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position, socialNetworks }, index) => (
          <Card
            key={name}
            className={`bg-muted/50 relative mt-8 flex flex-col justify-center items-center team-card ${
              index >= teamList.length - 2 ? "last-two" : ""
            }`}
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover profile-img"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">{position}</CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2"></CardContent>

            <CardFooter className="social-icons">
              {socialNetworks.map(({ name, url }) => (
                <div key={name}>
                  <a
                    rel="noreferrer noopener"
                    href={url}
                    target="_blank"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
