import { MantineProvider } from "@mantine/core";
import Navigationbar from "./components/Navigationbar/Navigationbar";
import Index from "./pages/Index";
import { theme } from "./theme";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer/Footer";
const headerlinks = [
  {
  link: "/",
  label: "HOME"
  },
  {
    link: "/about",
    label: "ABOUT"
  },
  {
    link: "/sponsor",
    label: "SPONSOR"
  },
]

const footerlinks = [
  {
    title: "Navigate",
    links: headerlinks
  },
  {
    title: "Go Somewhere",
    links: headerlinks
  }
]

export default function App() {
  
  return (
    
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Navigationbar links={headerlinks} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer data={footerlinks} />
    </MantineProvider>
  );
}
