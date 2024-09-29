import { Footer } from "../../components/Footer";
import { Form } from "../../components/Form";
import { AboutUs } from "./components/AboutUs";
import { Achievements } from "./components/Achievements";
import { ActiveDonation } from "./components/ActiveDonation";
import { Donate } from "./components/Donate";
import { Header } from "./components/Header";
import { NewsSection } from "./components/NewsSection";

export const Home = () => {
  return (<>
    <Header />
    <AboutUs />
    <Achievements />
    <ActiveDonation />
    <NewsSection />
    <Donate />
    <Form />
  </>);
}
