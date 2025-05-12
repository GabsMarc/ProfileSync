
import UserLink from '../components/userLink'
import UserImage from '../components/userImage'

import images from '@/assets'
import Image from 'next/image'


const links = [
  {
    id: 1,
    title: 'Wattpad',
    img: images.wattpad,
    link: 'https://www.wattpad.com/user/jkkeuphilter'
  },
  {
    id: 2,
    title: 'TikTok',
    img: images.tiktok,
    link: 'https://www.tiktok.com/@autoralahjkk?_t=ZM-8wAP0lNCqQv&_r=1'
  },
  {
    id: 3,
    title: 'Instagram',
    img: images.instagram,
    link: 'https://www.instagram.com/jkkeuphilter?igsh=M28zZGVzY25ueWZz'
  },
  {
    id: 4,
    title: 'X',
    img: images.x,
    link: 'https://x.com/jkkeuphilter?t=s_lb5lelzJFrzQvzXz9aOw&s=09'
  },
  {
    id: 5,
    title: 'Site - Selo DreamAmaze',
    img: images.dreamAmaze,
    link: 'https://selodreamamaze.lojavirtualnuvem.com.br'
  },
  {
    id: 6,
    title: 'Instagram - Selo DreamAmaze',
    img: images.dreamAmaze,
    link: 'https://www.instagram.com/selodreamamaze?igsh=cmY2cHR5dTFmaWpu'
  },
  {
    id: 7,
    title: 'Docs - Formulário intenção de compra',
    img: images.googleDocs,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdFzYrBGm-t3ySA6LlSskrqDaWylMSDSAhwaT7JJDqOmlmu-g/viewform?usp=header'
  },
]


export default function Home() {
  return (
    <div className='w-[100vw] h-[850px]'>

      <div className='bg-red-300 absolute z-0 w-[100%] h-[50vh]'>
        <Image
          src={images.background}
          alt=''
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      <div className="w-[100vw] h-[100%] flex flex-col overflow-scrolls 
        xl:flex-row
      ">

        <div className='flex-3 content-center justify-items-center z-1
        '>
          <UserImage />
          <div className='mt-5 bg-[#ffcccb] rounded-[10px]'>
            <span className='p-5 text-[18px] font-medium'>@jkkeuphilter</span>
          </div>
        </div>


        <div className='flex-4 content-center justify-items-center z-1 '>
          <div className='bg-[#e7e7e7be] rounded-[25px] justify-items-center pt-[20px] pb-[10px] overflow-scroll scrollbar-hide
            w-[85%] h-[90%]
            sm:w-[65vh] md:w-[70vh] 
            xl:w-[50vh] xl:h-[60vh]
            
          '>

            {
              links.map((e) => {
                return (
                  <UserLink
                    key={e.id}
                    title={e.title}
                    img={e.img}
                    link={e.link} />
                )
              })
            }

          </div>
        </div>

      </div>

    </div>
  )
}
