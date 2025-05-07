'use client'

import Image, { StaticImageData } from "next/image"

interface IUserLinks {
    title: string
    img: StaticImageData,
    link: string
}


export default function UserLink({ title, img, link }: IUserLinks) {
    return (
        <a className="bg-white w-[90%] h-[12%] rounded-[25px] flex mb-[10px] hover:h-[13%] cursor-pointer duration-[0.1s] hover:bg-[#FCB7BC]
            xl:h-[10%]
        "
            href={link}
        >

            <div className="flex-1 content-center pl-1">
                <Image
                    src={img}
                    alt={title}
                    width={45}
                    height={45}
                    className=" rounded-full " />
            </div>

            <div className="flex-5 rounded-r-[25px] content-center overflow-hidden text-ellipsis">
                <span
                    title={title}
                    className="font-medium text-[16px] text-nowrap overflow-hidden text-ellipsis pl-2"
                >
                    {title}
                </span>
            </div>
        </a>
    )
}