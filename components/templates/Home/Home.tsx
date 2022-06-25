import type { NextPage } from "next";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import { HomeProps } from "../../../types/types";

export async function getServerSideProps() {
  const defaultEndpoint = "http://localhost:4000/app";
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return { props: data };
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Header {...props.header} />

      {/* <main>main</main> */}

      <Footer />
    </>
  );
};

export default Home;
