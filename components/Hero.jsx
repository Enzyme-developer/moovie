import Head from "next/head";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative">
      <Head>
        <title>Log in | Moovie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 mt-16">
          <Image
            src="/images/cta-logo-one.svg"
            width="600"
            height="150"
            objectFit="contain"
          />

          <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
            Get all there
          </button>

          <h4 className="text-md text-center ">
            Get Premier Access to Popular and newest movies on MOOVIE.
          </h4>

          <Image
            src="/images/cta-logo-two.png"
            width="600"
            height="70"
            objectFit="contain"
          />
        </div>
      
    </section>
  );
}

export default Hero;