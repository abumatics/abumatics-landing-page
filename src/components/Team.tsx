import "./index.css";
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
   <section id="team" className="team-section">
  <h2 className="team-title">Our Dedicated Crew</h2>
  <div className="team-grid">
    {teamList.map(({ imageUrl, name, position, socialNetworks }) => (
      <div key={name} className="team-card">
        <img src={imageUrl} alt={`${name} ${position}`} />
        <h3>{name}</h3>
        <p>{position}</p>
        <div className="social-links">
          {socialNetworks.map(({ name, url }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              {socialIcon(name)}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
  );
};
