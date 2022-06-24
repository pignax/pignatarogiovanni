import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/organisms/Header/Header";
import { HomeProps } from "../types/types";

export async function getServerSideProps() {
  const defaultEndpoint = "http://localhost:4000/app";
  const res = await fetch(defaultEndpoint);
  const data = await res.json();

  return { props: data };
}

const Home: NextPage<HomeProps> = (data: HomeProps) => {
  return (
    <>
      <Head>
        <title>Giovanni Pignataro</title>
        <meta name="description" content="Personal web site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header {...data.header} />

      <header></header>

      <main>main</main>

      <footer>ciap</footer>
    </>
  );
};

export default Home;
