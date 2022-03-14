import Head from "next/head";

import PhotoContentComponent from ".";

export default function Photo() {
  return (
    <>
      <Head>
        <title>攝影 | 欣傳媒</title>
      </Head>
      <div>
        <header>這裡是Navbar</header>
        <main></main>
        <footer>這裡是footer</footer>
      </div>
    </>
  );
}
