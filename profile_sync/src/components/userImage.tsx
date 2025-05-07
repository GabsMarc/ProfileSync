import images from "@/assets"
import Image from "next/image"


export default function UserImage() {
    return (
        <div className="bg-[#e7e7e7] justify-items-center pt-[10px]
            w-[220px] h-[260px]
            md:w-[230px] md:h-[270px]
            xl:w-[270px] xl:h-[310px]
            p-4
        ">
            <div className="w-[100%] h-[100%]">
                <Image
                    src={images.user}
                    alt=""
                    width={0}
                    height={0}
                    className="object-cover"
                />


            </div>
        </div >
    )
}