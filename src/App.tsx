import { useTheme } from "./contexts/ThemeContext";
import Button from "./components/Button";
import Image from "./components/Image";
import Paragraph from "./components/Paragraph";
import ThemeSwitcherButtons from "./components/ThemeSwitcherButtons";

function App() {
  const { theme } = useTheme();

  return (
    <main className={theme}>
      <div className="container">
        <ThemeSwitcherButtons />
        <h1 className="title">Theme switcher</h1>
        <Paragraph />
        <Paragraph />
        <Image />
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <Button />
      </div>
    </main>
  );
}

export default App;
