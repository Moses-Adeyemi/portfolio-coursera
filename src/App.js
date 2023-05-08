import { ChakraProvider } from "@chakra-ui/react";
// import ContactMeSection from "./Components/ContactMeSection";
import Header from "./Components/Header.jsx";
import { AlertProvider } from "./Components/context/alertContext";
import ContactMeSection from "./Components/ContactMeSection";
import ProjectsSection from "./Components/ProjectsSection";
import LandingSection from "./Components/LandingSection";
import Footer from "./Components/Footer";


function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
       
          <Header />
          <LandingSection/>
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
