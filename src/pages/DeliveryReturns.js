import { useStore } from "../store/store";

import Section from "../components/UI/Section";
import Button from "../components/UI/Button";
import Typo from "../components/UI/Typo";

const DeliveryReturns = () => {
  const [{ language }] = useStore();

  return (
    <Section id="deliveryreturns">
      <Typo type="h2" text={language.deliveryreturns} />
      <Typo
        type="p"
        text="
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
      />
      <Button to="/" className="btn" text={language.backBtn} />
    </Section>
  );
};

export default DeliveryReturns;
