import React from "react";

import Section from "../components/UI/Section";
import Typo from "../components/UI/Typo";
import Button from "../components/UI/Button";
import { useStore } from "../store/store";

const About = () => {
  const [{ language }] = useStore();
  return (
    <div>
      <Section>
        <Typo type="h2" text={language.about} />
        <Typo type="h3" text={language.aboutTitle1} />
        <Typo type="p" text={language.aboutContent1} />
        <Typo type="h3" text={language.aboutTitle2} />
        <Typo type="p" text={language.aboutContent2} />
        <Typo type="h3" text={language.aboutTitle3} />
        <Typo type="p" text={language.aboutContent3} />
        <Button to="/" className="btn" text={language.backBtn} />
      </Section>
    </div>
  );
};

export default About;
