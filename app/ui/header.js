'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="fixed w-full bg-midnight-blue/80 h-24 z-20 flex justify-center">
            <div className="w-full px-20 flex justify-between items-center opacity-100">
                <div className="w-1/5 flex justify-center">
                    <Link
                        href={"/"}
                    >
                        <Image
                            src={"/Gonano_logo.svg"}
                            width={125}
                            height={90}
                            alt="Gonano LOGO Image"
                            className="" />
                    </Link>

                </div>
                <div className="w-3/5 flex justify-evenly font-semibold">
                    <h3 className="hover:text-purple-gradient" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                        {/* <Link href={"/products"}> */}
                            Products
                        {/* </Link> */}
                        {isOpen && (
                            <div className="absolute text-black bg-white flex flex-col justify-evenly h-60 w-60 rounded-sm">
                                <div>
                                    <Link href={"/products/shingle"}>Shingle Saver</Link>
                                </div>
                                <div>
                                    <Link href={"/products/wood"}>Wood Saver</Link>
                                </div>
                                <div>
                                    <Link href={"/products/concrete"}>Concrete Saver</Link>
                                </div>
                            </div>
                        )}

                    </h3>
                    <h3 className="hover:text-purple-gradient">
                        <Link href={"/about"}>
                            About
                        </Link>
                    </h3>
                    <h3 className="hover:text-purple-gradient">
                        <Link href={"/science"}>
                            Science
                        </Link>
                    </h3>
                    <h3 className="hover:text-purple-gradient">
                        <Link href={"/articles"}>
                            Articles
                        </Link>
                    </h3>
                    <h3 className="hover:text-purple-gradient">PLACEHOLDER</h3>
                </div>

            </div>
        </div>
    )
}
