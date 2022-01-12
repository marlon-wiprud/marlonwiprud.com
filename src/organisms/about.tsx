import { Body, Title } from "../atoms/typography";

type Props = {
  style?: React.CSSProperties;
};

export const About = ({ style }: Props) => {
  return (
    <div className="mt-10 flex flex-col max-w-2xl w-full" style={style}>
      <Title fontWeight="bold" className="mb-4">
        About
      </Title>
      <Body className="mb-2">
        Hi! My name is Marlon Wiprud, a full stack software engineer based in
        NYC. Im passionate about writing well crafted software, and love
        learning new technologies.
      </Body>
      <Body className="mb-2">
        Currently, Im helping build blockchain infrastructure for Social Money
        at Roll.
      </Body>
      <Body>
        Im passionate about Web3, Robotics, ML, and using technology to tranform
        the intagible to the tangible.
      </Body>
    </div>
  );
};
