

export default function Quote() {
    return (
        <div className="sm:pt-24">
            <h1 className="text-3xl font-semibold text-center">Get your 100% Free Quote</h1>
            <div className="bg-offWhite text-black flex flex-col w-1/4 p-10 m-auto my-10 rounded-2xl">
                <h2 className="text-xl font-medium text-center">Get your Quote</h2>
                <div className="flex flex-col gap-5">
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" className="w-full bg-white p-1 rounded border border-black/50" placeholder="Enter your Name"></input>
                    </div>
                    <div>
                        <label for="Phone">Phone:</label>
                        <input type="tel" id="Phone" name="Phone" className="w-full bg-white p-1 rounded border border-black/50" placeholder="Enter your Phone #"></input>
                    </div>
                    <div>
                        <label for="Email">Email:</label>
                        <input type="email" id="Email" name="Email" className="w-full bg-white p-1 rounded border border-black/50" placeholder="Enter your Email"></input>
                    </div>
                    <div>
                        <label for="desc">Describe your project:</label>
                        <textarea type="" id="desc" name="desc" className="w-full bg-white p-1 rounded border border-black/50" rows={3}
                            placeholder="Example: Shingles, Wood, Concrete, what the surface area and age of the material is. Whether or not you'll be needing any additional services."></textarea>
                    </div>
                    <div className="">
                        <p>Im Interested In (Optional)</p>
                        <div className="mb-1">
                            <input type="checkbox" id="roof" name="roof" className="hover:cursor-pointer"></input>
                            <label for="roof" className="ml-1 hover:cursor-pointer ">Roof treatment</label>
                        </div>
                        <div className="mb-1">
                            <input type="checkbox" id="wood" name="wood" className=" bg-white hover:cursor-pointer"></input>
                            <label for="wood" className="ml-1 hover:cursor-pointer">Wood treatment</label>
                        </div>
                        <div className="mb-1">
                            <input type="checkbox" id="concrete" name="concrete" className=" bg-white hover:cursor-pointer"></input>
                            <label for="concrete" className="ml-1 hover:cursor-pointer">Concrete treatment</label>
                        </div>
                        <div className="mb-1">
                            <input type="checkbox" id="other" name="other" className=" bg-white hover:cursor-pointer"></input>
                            <label for="other" className="ml-1 hover:cursor-pointer">Other</label>
                        </div>
                    </div>
                    <div className="hover:cursor-pointer m-auto mt-5 font-medium bg-purple-gradient w-fit p-3 rounded-xl shadow-2xl drop-shadow-[5px_5px_0_darker-purple] drop-shadow-darker-purple hover:drop-shadow-[0_0_0_darker-purple] transition-all duration-300 ease-out text-white">
                        Get Quote
                    </div>
                </div>
            </div>
        </div>
    )
}