import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <div className="w-screen bg-midnight-blue/80 h-24 z-10 flex justify-center">
            <div className="w-full px-20 flex justify-between items-center opacity-100">
                <div className="w-1/5 flex justify-center">
                    <Image
                        src={"/temp Gonano.svg"}
                        width={125}
                        height={90}
                        alt="Gonano LOGO Image" 
                        className=""></Image>
                </div>
                <div className="w-2/5 flex justify-evenly font-semibold">
                    <h3><Link href={"/products"}>Products</Link></h3>
                    <h3> 
                        <Link href={"/about"}>
                    About
                    </Link>
                    </h3>
                    <h3> <Link href={"/science"}>Science</Link> </h3>
                    <h3><Link href={"/articles"}>Articles</Link></h3>
                    <h3>PLACEHOLDER</h3>
                </div>
                <div className="w-1/5 flex justify-center">
                    
                </div>
            </div>
        </div>
    )
}
