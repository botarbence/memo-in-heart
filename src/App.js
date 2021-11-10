import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Modal from "./components/UI/Modal";
import { useStore } from "./store/store";
import img from "./assets/img/MEMO_webphoto.jpg";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Products = React.lazy(() => import("./pages/Products"));
const Contact = React.lazy(() => import("./pages/Contact"));
const FaqPage = React.lazy(() => import("./pages/FaqPage"));
const DeliveryReturns = React.lazy(() => import("./pages/DeliveryReturns"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));

const App = () => {
  const [{ modalOpen }, dispatch] = useStore();

  const closeModalHandler = () => {
    dispatch("CLOSE_MODAL");
  };

  return (
    <>
      <Layout>
        {modalOpen && (
          <Modal onClose={closeModalHandler}>
            <img className="modal__img" src={img} alt="img" />
          </Modal>
        )}
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/frequently-asked-questions" element={<FaqPage />} />
            <Route path="/delivery-and-returns" element={<DeliveryReturns />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/" element={<Navigate to="/home" replace={true} />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
