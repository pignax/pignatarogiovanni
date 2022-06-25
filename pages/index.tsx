import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";
import { HomeProps } from "../types/types";

export async function getServerSideProps() {
  const defaultEndpoint = "http://localhost:4000/app";
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return { props: data };
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <>
      <Head>
        <title>Giovanni Pignataro</title>
        <meta name="description" content="Personal web site" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap" />
      </Head>

      <Header {...props.header} />

      {/* <main>main</main> */}

      <Footer />
    </>
  );
};

export default Home;
