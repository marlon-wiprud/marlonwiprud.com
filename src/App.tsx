import "./App.css";
import { PageHome } from "./pages/home";
import { ProviderTheme } from "./providers/theme";

function App() {
  return (
    <ProviderTheme>
      <PageHome />
    </ProviderTheme>
  );
}

export default App;
