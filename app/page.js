'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [index, setIndex] = useState(0)
  const materialList = ["Concrete", "Wood", "Shingles"]
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % materialList.length);
    }, 2000); // change text every 2 seconds

    return () => clearInterval(interval); // clean up
  }, []);


  return (
    <div className="">
      <main className="bg-midnight-blue">
        <section id="Home" className="h-[70vh] w-full flex flex-col justify-evenly items-center text-3xl">
          <div className="text-center w-1/2">
            <p className="text-center ">
              Nano Coatings and Sealants for
            </p>
            <div className="text-cycler w-full flex justify-center text-5xl font-bold">
              <span className="">Concrete</span>
              <span className="">Wood</span>
              <span className="">Shingles</span>
              <span className="">Membranes</span>
            </div>
          </div>
          <div className="text-center">
            <p>
              Add 15 Years of life to your Roof
            </p>
            <p>
              Save thousands on your roof maintenance
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
