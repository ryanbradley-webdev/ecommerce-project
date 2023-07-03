import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <h1>Hello</h1>
    </MantineProvider>
  )
}