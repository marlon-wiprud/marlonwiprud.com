import { Background } from "../atoms/background";
import { TemplatePageContent } from "../templates/pageContent";

export const TemplatePage: React.FC = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Background>
        <TemplatePageContent>{children}</TemplatePageContent>
      </Background>
    </div>
  );
};
