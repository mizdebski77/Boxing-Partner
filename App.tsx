import { ThemeProvider } from "styled-components/native";
import { theme } from "./core/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>

    </ThemeProvider>
  );
}

