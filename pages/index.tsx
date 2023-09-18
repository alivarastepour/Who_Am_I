import Head from "next/head";

import HomePageWrapper from "@/components/HomePageWrapper/HomePageWrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ali Varaste Pour</title>
        <meta name="theme-color" color="#040d12" />
        <meta
          name="description"
          content="Learn more about Ali Varaste pour, his skills and experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePageWrapper />
    </>
  );
}
