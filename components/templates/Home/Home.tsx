import type { NextPage } from "next";
import Header from "../../organisms/Header/Header";
import Main from "../../organisms/Main/Main";
import Footer from "../../organisms/Footer/Footer";
import { HomeProps } from "../../../types/types";

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Header {...props.header} />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
