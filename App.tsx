import { ThemeProvider } from "styled-components/native";
import { theme } from "./core/theme";
import AppNavigation from "./core/navigation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigation />
    </ThemeProvider>
  );
}

