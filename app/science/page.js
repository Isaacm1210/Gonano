import Image from "next/image";

export const metadata = {
    title: "Science",
    description: "The Science of GoNano",
};


export default function Science() {
    return <div className="w-full">
        <section id="title" className="h-80 ">
            <h1>The Science Behind GoNano</h1>
        </section>
        <section id="Sealants" className="min-h-screen bg-white text-midnight-blue text-center py-30">
            <h1 className="text-6xl font-bold my-5">GoNano vs Traditional Sealants</h1>
            <div className="flex w-4/5 justify-evenly text-2xl font-medium mt-20 mx-auto md:flex-row flex-col">
                <div className="w-4/5 md:w-1/2 m-auto md:m-0">
                    <h2 className="font-semibold">Traditional Sealant</h2>
                    <br />
                    <ul className="text-xl text-left list-disc px-5 w-full md:w-3/4 m-auto">
                        <li >Acts as an isolated, protective layer</li>
                        <li className="my-2">Typical repair on microscale, adds layer of oil</li>
                        <li>Less durable, flexible and resilient to aging due to environmental conditions</li>
                    </ul>
                </div>
                <div className="w-4/5 md:w-1/2 m-auto md:m-0 mt-10 md:mt-0">
                    <h2 className="font-semibold">GoNano Sealant</h2>
                    <br />
                    <ul className="text-xl text-left list-disc px-5 w-full md:w-3/4 m-auto">
                        <li>Modifies the mechanical properties of asphalt</li>
                        <li className="my-2">Nanoscale (1000X smaller than a micro meter) forms precise shapes into asphalt pores</li>
                        <li>Bonds to each asphalt shingle, and each shingle to the other</li>
                    </ul>
                </div>
            </div>
            <Image src={"/ParticleSize.jpg"} width={1200} height={650} alt="Size comparison of nano particle" className="m-auto" />
        </section>
        <section id="Classes" className="min-h-fit text-center py-30 ">
            <h1 className="text-6xl font-bold my-5">Shingle Class Transformation</h1>
            <div>
                <h2 className="text-4xl">Shingle Classes</h2>
                <div className="grid grid-cols-2 lg:w-1/2 w-4/5 m-auto gap-3.5 mb-10 mt-5">
                    <div className="w-4/5 m-auto bg-white border-0 rounded-lg p-2 text-midnight-blue h-full h-max">
                        <h3 className="text-3xl font-semibold">Class 1</h3>
                        <p className="text-lg font-medium">Least resistant, can withstand at most a 1.25-inch steel ball test.</p>
                    </div>
                    <div className="w-4/5 m-auto bg-white border-0 rounded-lg p-2 text-midnight-blue h-full">
                        <h3 className="text-3xl font-semibold">Class 2</h3>
                        <p className="text-lg font-medium">Can withstand at most a 1.5-inch steel ball test.</p>
                    </div >
                    <div className="w-4/5 m-auto bg-white border-0 rounded-lg p-2 text-midnight-blue h-full">
                        <h3 className="text-3xl font-semibold">Class 3</h3>
                        <p className="text-lg font-medium">Can withstand at most a 1.75-inch steel ball test.</p>
                    </div>
                    <div className="w-4/5 m-auto bg-white border-0 rounded-lg p-2 text-midnight-blue h-full">
                        <h3 className="text-3xl font-semibold">Class 4</h3>
                        <p className="text-lg font-medium">Highest resistance, can withstand up to a 2-inch steel ball test.</p>
                    </div>
                </div>
            </div>
            <p className="w-1/2 m-auto text-xl">
                For GoNano to earn a Class 4 certification, a 50.88mm(2-in) diameter steel ball
                was dropped from 20 feet above a vulnerable section of a shingled roof. Following these tests,
                roofs treated with GoNano showed no signs of damage and/or cracking.
                <span className="font-semibold"> One treatment from GoNano’s sealant transforms Class 1 shingles into Class 3,
                    and two treatments into Class 4.</span>
            </p>
        </section>
        <section id="GoNanoEffect" className="min-h-fit py-30 text-center bg-white text-midnight-blue">
            <h1 className="text-6xl font-bold my-5">Permanent Structure Modification</h1>
            <div className="w-2/3 m-auto">
                <h2 className="text-2xl">
                    GoNano's technology doesn’t add a protective layer, like traditional sealants, nor does it simply replace lost
                    oil: it modifies and enhances the molecular structure of asphalt shingles permenantly.
                </h2>
                
            </div>
            <Image src={'/Shingle_Reaction.jpg'} width={1180} height={520} alt="Shingle Modification Process" className="m-auto w-11/12 lg:w-3/5"/>
        </section>
        <section id="Advantages" className="bg-purple-gradient min-h-fit py-30 text-center w-full">
            <h1 className="text-6xl font-bold my-5">GoNano Advantages</h1>
            <div className="flex justify-evenly lg:w-3/5 m-auto pt-2">
                <div className="w-1/3">
                    <Image src="/icons/Protected_icon.svg" width={300} height={300} alt="Shield With Check Mark icon" className="m-auto w-2/3" />
                    <h2 className="m-3 mt-0 text-3xl font-medium">Improved flexibility</h2>
                    <p>Elastic strain resilience, high tensile strength to pressure and load, fracture aversion. </p>
                </div>
                <div className="w-1/3">
                    <Image src="/icons/repels_icon.svg" width={300} height={300} alt="Repels Water Icon" className="m-auto w-2/3" />
                    <h2 className="m-3 mt-0 text-3xl font-medium">Hydrophobic</h2>
                    <p>Impervious to moisture infiltration.</p>
                </div>
                <div className="w-1/3">
                    <Image src="/icons/Improves-roof-health_icon.svg" width={300} height={300} alt="Increased Health Icon" className="m-auto w-2/3 h-fit" />
                    <h2 className="m-3 mt-0 text-3xl font-medium">Adaptable fatigue life</h2>
                    <p>Endures greater cycles and seasons of stress.</p>
                </div>
            </div>
        </section>
        <section id="Environment" className="min-h-fit py-30 text-center">
            <h1 className="text-6xl font-bold my-5">Environmental Impacts</h1>
            <div className="w-2/3 m-auto mt-10">
                <p className="text-2xl ">
                    GoNano’s technology has been categorizedin accordance with the Occupational Safety and 
                    HealthAdministration standards (OHSA) as being:
                </p>
                <ol className="text-xl w-fit text-left m-auto mt-4 list-decimal">
                    <li>"Quickly biodegradable"</li>
                    <li>"No bioaccumulation potential"</li>
                    <li>"No harm to aquatic organisms"</li>
                </ol>
                <p className="text-2xl mt-10">
                GoNano is therefore <span className="font-bold">safe for the environment and on human health.</span>
                </p>
            </div>
        </section>

    </div>
}