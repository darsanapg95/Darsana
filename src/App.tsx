import Home from './pages/home'
import { MantineProvider } from "@mantine/core";

function App() {

  return (
    <>
      <MantineProvider>
        <Home />
      </MantineProvider>
    </>
  )
}

export default App;
