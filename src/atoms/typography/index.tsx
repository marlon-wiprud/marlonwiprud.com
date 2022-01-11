type Fonts = "source-code-pro" | "roboto-mono";

type TypographyProps = {
  font?: Fonts;
  size?: string;
  color?: string;
  className?: string;
};

const fontMap: { [key: string]: string } = {
  "source-code-pro": "font-source-code-pro",
  "roboto-mono": "font-roboto-mono",
};

export const TypographyBase: React.FC<TypographyProps> = ({
  children,
  font,
  size,
  color,
  className = "",
}) => (
  <p
    style={{ fontSize: size, color }}
    className={`${fontMap[font || "roboto-mono"]} ` + className}
  >
    {children}
  </p>
);

export const Caption: React.FC<TypographyProps> = ({ children, ...props }) => (
  <TypographyBase size="12px" {...props}>
    {children}
  </TypographyBase>
);

export const SubTitle: React.FC<TypographyProps> = ({ children, ...props }) => (
  <TypographyBase size="14px" {...props}>
    {children}
  </TypographyBase>
);

export const Body: React.FC<TypographyProps> = ({ children, ...props }) => (
  <TypographyBase size="16px" {...props}>
    {children}
  </TypographyBase>
);

export const Title: React.FC<TypographyProps> = ({ children, ...props }) => (
  <TypographyBase size="20px" {...props}>
    {children}
  </TypographyBase>
);
