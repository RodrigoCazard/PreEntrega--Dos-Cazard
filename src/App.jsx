import "./App.css";
import NavBar from "./components/NavBar/MainNavBar";

import ItemListContainer from "./components/Items/ItemListContainer";
import Hero from "./components/Hero/Hero";
import ScrollToTopOnRefresh from "./components/Utils/ScrollToTop";
import { useEffect, useState } from "react";
import Loader from "./components/Utils/Loader";
import NavMenu from "./components/NavBar/NavMenu";
import CategoryListContainer from "./components/Categories/CategoryListContainer";
import { Box } from "@mui/material";
import CustomThemeProvider from "./components/Utils/CustomThemeProvider";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); //Tiempo del loading

    return () => clearTimeout();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setScrollPosition(window.scrollY);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      window.scrollTo(0, scrollPosition);
    }
  }, [isOpen, scrollPosition]);

  return (
    <>
      <ScrollToTopOnRefresh />
      {loading ? (
        <Loader />
      ) : (
        <>
          <CustomThemeProvider>
            <NavBar isOpen={isOpen} toggleMenu={toggleMenu} />
            {isOpen ? (
              <NavMenu isOpen={isOpen}></NavMenu>
            ) : (
              <Box style={{ padding: "0 8%" }}>
                <Hero></Hero>
                <CategoryListContainer
                  greeting={"Aqui van a ir las categorias :D"}
                ></CategoryListContainer>
                <ItemListContainer greeting={"Aqui van a ir los items :D"} />
              </Box>
            )}
          </CustomThemeProvider>
        </>
      )}
    </>
  );
}

export default App;
