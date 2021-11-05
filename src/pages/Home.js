import React from "react";

import { useStore } from "../store/store";
import Section from "../components/UI/Section";
import Typo from "../components/UI/Typo";
import Image from "../components/UI/Image";

import img from "../assets/img/pexels-pixabay-210186.jpg";
import Button from "../components/UI/Button";

const Home = () => {
  const [{ language }] = useStore();

  return (
    <div>
      <Section>
        <Typo type="h2" text={language.about} />
        <Image className="sectionimg" src={img} alt="img" />
        <Typo type="p" text={language.homeAboutContent} />
        <Button to="/about" className={"btn"} text={language.moreBtn} />
      </Section>
      <Section>
        <Typo type="h2" text={language.products} />
        <Image className="sectionimg" src={img} alt="img" />
        <Typo type="h3" text={language.productsTitle} />
        <Typo type="p" text={language.productsContent} />
        <Button to="/products" className={"btn"} text={language.moreBtn} />
      </Section>
      <Section>
        <Typo type="h2" text={language.contact} />
        <Typo
          type="p"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
        />
        <Button to="/about" className="btn" text={language.moreBtn} />
      </Section>
    </div>
  );
};

export default Home;
