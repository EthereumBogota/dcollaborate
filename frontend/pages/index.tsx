import Head from "next/head";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";


const Home = () => {
  return (
    <>
      <Head>
        <title>DCollaborate</title>
        <meta
          name="description"
          content="DCollaborate"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <SectionTitle
        title=" DCollaborate">
        Tool with which a DAO can grant part of the collateral for the loans of its most reputable members while the treasury earns a percentage. Receive funds from the DAO, funds from members, open Collateral position in e.g. compound and also the remaining treasury left by the DAO to be rented until more members opt for this option of having loans with less collateral than what the market is.  
      </SectionTitle>
    </>
  );
}

export default Home;
