import { Body, Title } from "../../atoms/typography";
import React from "react";
import { useTheme } from "../../hooks";

type LogoProps = {
  src: string;
  width: number;
};

export const TechLogo = ({ src, width }: LogoProps) => (
  <img
    src={src}
    alt="tech-logo"
    className="h-24 shadow-lg rounded-xl mr-4"
    style={{ width }}
  />
);

export const Tag: React.FC = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.backgroundSecondary }}
      className="p-2 rounded-lg shadow-md mr-2 mb-2"
    >
      <Body>{children}</Body>
    </div>
  );
};

export const Technologies = () => {
  return (
    <div className="mt-10 flex flex-col w-full max-w-2xl">
      <Title fontWeight="bold" className="mb-4">
        Technologies
      </Title>
      <div className="flex flex-row flex-wrap">
        <Tag>Golang</Tag>
        <Tag>NodeJS</Tag>
        <Tag>React</Tag>
        <Tag>React Native</Tag>
        <Tag>Postgres</Tag>
        <Tag>MongoDB</Tag>
        <Tag>SQL</Tag>
        <Tag>NoSQL</Tag>
        <Tag>Python</Tag>
        <Tag>Tensorflow</Tag>
        <Tag>Keras</Tag>
        <Tag>AWS</Tag>
        <Tag>Heroku</Tag>
        <Tag>Docker</Tag>
        <Tag>Unity</Tag>
        <Tag>C#</Tag>
        <Tag>C++</Tag>
        <Tag>ROS</Tag>
        <Tag>Arduino</Tag>
        <Tag>Raspberry PI</Tag>
        <Tag>ROS</Tag>
        <Tag>Web3</Tag>
        <Tag>Typescript</Tag>
        <Tag>RPC/GRPC</Tag>
        <Tag>Ethereum</Tag>
      </div>
    </div>
  );
};
