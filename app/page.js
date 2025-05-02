import Image from "next/image";


export default function Home() {


  return (
    <div className="w-lvw">
      <main className="bg-midnight-blue z-10">
        <section id="Home" className="h-[100vh] w-full flex flex-col justify-evenly items-center sm:text-4xl text-2xl font-semibold bg-[url(/Roof-Spray-2.PNG)] bg-cover">
          <div className="text-center w-2/3 ">
            <p className="text-center">
              Nano Coatings and Sealants for
            </p>
            <div className="text-cycler w-full flex justify-center lg:text-9xl sm:text-7xl xs:text-5xl text-4xl font-extrabold text-purple-gradient ">
              <span className="">CONCRETE</span>
              <span className="">WOOD</span>
              <span className="">SHINGLES</span>
              <span className="">MEMBRANES</span>
            </div>
          </div>
          <div className="text-center sm:w-fit w-4/5">
            <p>
              Add <span className="font-bold text-orange-gradient">15 Years</span> of life to your Roof
            </p>
            <p>
              Save <span className="font-bold text-orange-gradient">Thousands</span> on your roof maintenance
            </p>
          </div>


        </section>
        <section id="Home" className="h-96 bg-purple-gradient">

        </section>
        <section id="Home" className="h-96 bg-white">

        </section>
      </main>
    </div>
  );
}
