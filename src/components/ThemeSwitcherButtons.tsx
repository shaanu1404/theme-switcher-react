import { Theme, useTheme } from "../contexts/ThemeContext";

function ThemeSwitcherButtons() {
  return (
    <div className="switcher-btn-panel">
      <ToggleButton theme="lighty" />
      <ToggleButton theme="bluey" />
      <ToggleButton theme="darky" />
      <ToggleButton theme="greeny" />
      <ToggleButton theme="indigoy" />
      <ToggleButton theme="pinky" />
      <ToggleButton theme="purpley" />
    </div>
  );
}

function ToggleButton({ theme }: { theme: Theme }) {
  const { toggleTheme } = useTheme();

  const changeTheme = (theme: Theme) => () => {
    toggleTheme(`theme-${theme}`);
  };

  return (
    <button
      className={`switcher-btn theme-${theme}`}
      onClick={changeTheme(theme)}
    ></button>
  );
}

export default ThemeSwitcherButtons;
