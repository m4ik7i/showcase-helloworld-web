import Head from 'next/head';

const Home = (_props) => (
  <div className="container">
    <Head>
      <title>Hello World</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>Hello, world!</h1>
    </main>
  </div>
);

export default Home;
