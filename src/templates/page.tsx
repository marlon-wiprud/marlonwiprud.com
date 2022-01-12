import { Background } from "../atoms/background";
import { TemplatePageContent } from "../templates/pageContent";

export const TemplatePage: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Background>
        <TemplatePageContent>{children}</TemplatePageContent>
      </Background>
    </div>
  );
};
