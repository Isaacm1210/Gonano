import Image from "next/image"
export default function Footer() {
    return <div className="w-full h-full border-t-[6px] border-purple-gradient z-10 ">
        <div className="m-auto w-4/5 h-4/5 flex items-center justify-evenly">
            <div className="w-1/3 h-2/3 flex flex-col justify-evenly">
                <div >
                    <Image
                        src={"/Gonano_logo.svg"}
                        width={125}
                        height={90}
                        alt="Gonano Logo"
                    />
                </div>
                <div >
                    Address
                    <br />
                    <br />
                    123 SomeStreet Calgary, AB
                </div>
            </div>

            <div>
                Contact

            </div>
        </div>
    </div>
}