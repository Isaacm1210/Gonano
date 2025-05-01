'use client'

import Image from "next/image";
import { useState } from "react";


export default function Shingle() {
    const [viewFull, setViewFull] = useState(false);
    return <div className="w-full h-full">
        <section id="Product" className="flex lg:w-4/5 lg:p-0 min-h-[50vh] justify-evenly m-auto gap-2 my-10 md:flex-row flex-col">
            <div className="bg-[url(/products/Shingle-Saver-Pattern.png)] bg-cover md:w-1/3 md:h-80 h-40 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <a href="#ShingleSaver" >
                    <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/70 to-dark-purple/0 p-5">
                        <h1 className="font-bold text-5xl">Shingle Saver</h1>
                        <p className="w-3/4 text-2xl">The Ultimate protection for new and younger roofs</p>
                    </div>
                </a>
            </div>
            <div className="bg-[url(/products/Revive-Pattern.png)] bg-cover md:w-1/3 md:h-80 h-40 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <a href="#Revive">
                    <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/70 to-dark-purple/0 p-5">
                        <h1 className="font-bold text-5xl">Revive</h1>
                        <p className="w-3/4 text-2xl">The Best way to protect and extend the life of older roofs</p>
                    </div>
                </a>
            </div>
            <div className="bg-[url(/products/Bio-Boost-Pattern.png)] bg-cover md:w-1/3 md:h-80 h-40 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <a href="#BioBoost">
                    <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/70 to-dark-purple/0 p-5">
                        <h1 className="font-bold text-5xl w-full">Bio-Boost</h1>
                        <p className="w-3/4 text-2xl">Basic protection for an exceptional price</p>
                    </div>
                </a>
            </div>
        </section>
        <section id="Benefits" className="w-full bg-purple-gradient h-96">

        </section>
        <section id="ShingleSaver" className="min-h-screen bg-midnight-blue py-28">
            <div className="w-4/5 m-auto text-center h-1/3">
                <Image src={"/products/cans/Shingle_Saver.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/2 h-fit m-auto md:hidden block" />
                <h1 className="text-6xl font-bold ">SHINGLE SAVER</h1>
                <p className=" mt-10 text-2xl">
                    A new solution for extending and maintaining your roof. By using a nano-technology-driven approach, gonano developed a breathable,
                    deep penetrating, clear, hydrophobic, and UV-resistant coating to make asphalt shingles more durable.
                </p>
            </div>
            <div className="w-11/12 flex justify-evenly m-auto h-2/3 mt-10">
                <Image src={"/products/cans/Shingle_Saver.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/3 h-fit m-auto hidden md:block" />
                <ul className="m-auto font-semibold flex justify-evenly text-center flex-col w-full gap-5 md:gap-0">
                    <li className="h-1/4 flex">
                        <Image src="/icons/Protected_icon.svg" width={300} height={300} alt="Shield With Check Mark icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto text-left h-full w-2/3">
                            <h3 className="text-orange-gradient text-3xl">Fortify</h3>
                            <p className="text-xl">Significantly increase impact resistance, making your roof hailstorm ready.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/wind_icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Enhance</h3>
                            <p className="text-xl">Boost wind resistance ensuring your shingles stay put in even extreme weather.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/repels_icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Preserve</h3>
                            <p className="text-xl">Create a hydrophobic barrier that repels water and prevents moisture damage.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Improves-roof-health_icon.svg" width={300} height={300} alt="Increased Health Icon" className="max-w-[170px] w-1/4 " />
                        <div className="my-auto text-left">
                            <h3 className="text-orange-gradient text-3xl">Longevity</h3>
                            <p className="text-xl">Extend the life of your roof by up to 15 years with just one treatment.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
        <section id="Revive" className="min-h-screen bg-white text-dark-purple py-28">
            <div className="w-4/5 m-auto text-center h-1/3">
                <Image src={"/products/cans/Revive_label.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/2 h-fit m-auto md:hidden block" />
                <h1 className="text-6xl font-bold ">Revive</h1>
                <p className=" mt-10 text-2xl">
                    GoNano Revive is an advanced solution for rejuvenating and protecting asphalt shingle roofs.
                    It offers unmatched durability, reduced maintenance, and extends the lifespan of asphalt surfaces by a minimum of 5 to 10 years.
                </p>
            </div>
            <div className="w-11/12 flex justify-evenly m-auto h-2/3 mt-10">
                <Image src={"/products/cans/Revive_label.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/3 h-fit m-auto hidden md:block" />
                <ul className="m-auto font-semibold flex justify-evenly text-center flex-col w-full gap-5 md:gap-0">
                    <li className="h-1/4 flex">
                        <Image src="/icons/Time_icon_dark.svg" width={300} height={300} alt="Shield With Check Mark icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto text-left h-full w-2/3">
                            <h3 className="text-orange-gradient text-3xl">Revive</h3>
                            <p className="text-xl">Bring back the strength and durability of your roof. </p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Improves-roof-health_icon_dark.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Extend</h3>
                            <p className="text-xl">Add an impressive 5-10 years to the lifespan of your roof.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/Protected_icon_dark.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Protect</h3>
                            <p className="text-xl">Shield your roof from the elements with superior Nanotechnology. </p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>
        <section id="BioBoost" className="min-h-screen py-28">
            <div className="w-4/5 m-auto text-center h-1/3">
                <Image src={"/products/cans/Bio-boost.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/2 h-fit m-auto md:hidden block" />
                <h1 className="text-6xl font-bold ">Bio-Boost</h1>
                <p className=" mt-10 text-2xl">
                    GoNano Revive is an advanced solution for rejuvenating and protecting asphalt shingle roofs.
                    It offers unmatched durability, reduced maintenance, and extends the lifespan of asphalt surfaces by a minimum of 5 to 10 years.
                </p>
            </div>
            <div className="w-11/12 flex justify-evenly m-auto h-2/3 mt-10">
                <Image src={"/products/cans/Bio-boost.png"} width={1936} height={2224} alt="Shing Saver Can" className="max-w-1/3 h-fit m-auto hidden md:block" />
                <ul className="m-auto font-semibold flex justify-evenly text-center flex-col w-full gap-5 md:gap-0">
                    <li className="h-1/4 flex">
                        <Image src="/icons/Time_icon.svg" width={300} height={300} alt="Shield With Check Mark icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto text-left h-full w-2/3">
                            <h3 className="text-orange-gradient text-3xl">Boosts Longevity</h3>
                            <p className="text-xl">Extend the life of your roof by up to 5 years.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/repels_icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Resists Damage</h3>
                            <p className="text-xl">Helps defend against weather, UV exposure and everyday ware.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/deep penetration_icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Restores Vitality</h3>
                            <p className="text-xl">Rehydrates shingles by infusing bio-oil and enhancing flexibility.</p>
                        </div>
                    </li>
                    <li className="flex">
                        <Image src="/icons/cost savings_icon.svg" width={300} height={300} alt="Repels Water Icon" className="max-w-[170px] w-1/4" />
                        <div className="my-auto  text-left">
                            <h3 className="text-orange-gradient text-3xl">Saves Money</h3>
                            <p className="text-xl">Reliable performance at a cost-effective price.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section id="Compare" className="bg-white w-full h-full">
            <Image src={"/products/Product_chart.png"} width={1900} height={1000} alt="Product comparison chart" className="w-3/4 m-auto" />
            <div className="text-black text-2xl font-medium w-fit m-auto hover:text-purple-gradient" onClick={() => setViewFull(true)}>Click to view Full Screen</div>

        </section>
        {/* {viewFull &&
            <div
                onClick={() => setViewFull(false)}
                className="fixed block z-[999] top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-center bg-black/65 hover:cursor-zoom-out rotate-90 md:rotate-0 bg-[url(/products/Product_chart.png)]"
            />
        } */}
    </div>
}