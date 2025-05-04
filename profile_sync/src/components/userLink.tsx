'use client'

import Image, { StaticImageData } from "next/image"

interface IUserLinks {
    text: string
    img: StaticImageData,
    link: string

}


export default function UserLink({ text, img, link }: IUserLinks) {
    return (
        <div className="bg-white w-[90%] h-[12%] rounded-[25px] flex mb-[10px]">

            <div className="flex-1 content-center pl-[5px]">
                <Image
                    src={img}
                    alt={text}
                    width={50}
                    height={50}
                    className="object-cover rounded-full" />
            </div>

            <div className="bg-white flex-5 rounded-r-[25px] content-center overflow-hidden text-ellipsis">
                <a
                    href={link}
                    className="font-medium text-[16px] text-nowrap overflow-hidden text-ellipsis pl-2"
                >
                    {text}
                </a>
            </div>
        </div>
    )
}