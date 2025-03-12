import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="container">
        <nav className="navbar">
          <h2>Pokédex</h2>
          <div className="menuIcon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </nav>

        <section className="hero">
        <div className="heroImage">
          <Image src="/assets/pokedex.png" alt="Pokédex"  width={250} height={250} />
          </div>
          <div className="content">
            <h1>Catch 'Em All!</h1>
            <p>Explore with Our Interactive Pokédex</p>
            <a href="#" className="btn">View Pokédex</a>
          </div>
          
        </section>
      </div>
    </>
  );
}
