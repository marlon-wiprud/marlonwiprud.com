import { Title } from "../../atoms/typography";
import GithubIcon from "../../assets/githubIcon.png";
import LinkedinIcon from "../../assets/linkedinLogo.png";
import TwitterIcon from "../../assets/twitterLogo.png";
import CalendlyIcon from "../../assets/calendlyIcon.png";

type Props = {
  src: string;
  link: string;
};

export const ContactOption = ({ src, link }: Props) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img
        src={src}
        alt="tech-logo"
        className="h-12 w-12 shadow-lg rounded-full mr-4"
      />
    </a>
  );
};

export const Contact = () => {
  return (
    <div className="mt-10 flex flex-col w-full max-w-2xl">
      <Title fontWeight="bold" className="mb-4">
        Contact
      </Title>
      <div className="flex flex-row">
        <ContactOption
          src={GithubIcon}
          link="https://github.com/marlon-wiprud"
        />
        <ContactOption src={TwitterIcon} link="https://twitter.com/__marlonw" />
        <ContactOption
          src={LinkedinIcon}
          link="https://www.linkedin.com/in/marlon-wiprud-892108148/"
        />
        <ContactOption
          src={CalendlyIcon}
          link="https://calendly.com/marlon-wiprud/30min"
        />
      </div>
    </div>
  );
};
