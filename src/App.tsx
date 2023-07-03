import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Routes>
        <Route path="/" element={'Home'} />
      </Routes>
    </MantineProvider>
  )
}