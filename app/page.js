import Image from "next/image";


export default function Home() {


  return (
    <div className="">
      <main className="bg-midnight-blue z-10">
        <section id="Home" className="h-[100vh] w-full flex flex-col justify-evenly items-center text-4xl font-semibold bg-[url(/Roof-Spray-2.PNG)] bg-cover">
          <div className="text-center w-2/3 ">
            <p className="text-center">
              Nano Coatings and Sealants for
            </p>
            <div className="text-cycler w-full flex justify-center text-9xl font-extrabold text-purple-gradient">
              <span className="">CONCRETE</span>
              <span className="">WOOD</span>
              <span className="">SHINGLES</span>
              <span className="">MEMBRANES</span>
            </div>
          </div>
          <div className="text-center">
            <p>
              Add <span className="font-bold text-purple-gradient">15 Years</span> of life to your Roof
            </p>
            <p>
              Save <span className="font-bold text-purple-gradient">Thousands</span> on your roof maintenance
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
