import { TemplatePage } from "../templates/page";
import { Terminal } from "../molecules/terminal";
import { About } from "../organisms/about";
import { Technologies } from "../organisms/technologies";
import { Contact } from "../organisms/contact";

export const PageHome = () => {
  return (
    <TemplatePage>
      <div className="w-full max-w-2xl">
        <Terminal
          style={{ height: 100, marginTop: "10%" }}
          history={["Welcome to  marlonwiprud.com..."]}
        />
      </div>
      <About />
      <Technologies />
      <Contact />
    </TemplatePage>
  );
};
