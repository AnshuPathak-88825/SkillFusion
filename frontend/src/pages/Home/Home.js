import React from "react";
import ReactDOM from "react-dom";
import Herosection from "../../components/Hero_section/Hero_sect";
import NavigationMenu from "../../components/navigation/NavigationMenu";
import FeaturesSection from "../../components/Feature/Feature";
const Home = () => {
  return (
    <div className="container">
      <NavigationMenu />
      <Herosection />
      <FeaturesSection/>
    </div>
  );
};
export default Home;
