import Image from "next/image";


export default function Shingle() {
    return <div className="w-full">
        <section id="Product" className="flex w-4/5  h-[50vh] justify-evenly m-auto gap-4 mt-10">
            <div className="bg-[url(/products/Shingle-Saver-Pattern.png)] bg-cover w-1/3 h-2/3">
                <a href="#ShingleSaver">
                    <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/60 to-dark-purple/0 p-5">
                        <h1 className="font-bold text-3xl">Shingle Saver</h1>
                        <p className="w-3/4 text-xl">The Ultimate protection for new and younger roofs</p>
                    </div>
                </a>
            </div>
            <div className="bg-[url(/products/Revive-Pattern.png)] bg-cover w-1/3 h-2/3">
                <a href="#Revive">
                    <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/60 to-dark-purple/0 p-5">
                        <h1 className="font-bold text-3xl">Revive</h1>
                        <p className="w-3/4 text-xl">The Best way to protect and extend the life of older roofs</p>
                    </div>
                </a>
            </div>
            <div className="bg-[url(/products/Bio-Boost-Pattern.png)] bg-cover w-1/3 h-2/3 ">
                <a href="#BioBoost">
                    <div className="w-full h-full bg-gradient-to-b from-dark-purple via-dark-purple/60 to-dark-purple/0 p-5">
                        <h1 className="font-bold text-3xl w-full">Bio-Boost</h1>
                        <p className="w-3/4 text-xl">Basic protection for an exceptional price</p>
                    </div>
                </a>
            </div>
        </section>
        {/* <section id="InfoChart" className="w-full bg-white">
            <Image src={"/products/Product_chart.png"} width={1920} height={1400} alt="Product Chart comparison" className="w-3/4 m-auto" />
        </section> */}
        <section id="ShingleSaver">


        </section>
        <section id="Revive"></section>
        <section id="BioBoost"></section>
    </div>
}