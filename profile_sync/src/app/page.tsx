
import UserLink from '../components/userLink'
import UserImage from '../components/userImage'

import { images } from '@/assets'




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
    link: ''
  },
  {
    id: 3,
    title: 'Instagram',
    img: images.instagram,
    link: ''
  },
  {
    id: 4,
    title: 'X',
    img: images.x,
    link: ''
  },
  {
    id: 5,
    title: 'Selo DreamAmazeSelo DreamAmazeSelo DreamAmazeSelo DreamAmazeSelo DreamAmazeSelo DreamAmaze',
    img: images.dreamAmaze,
    link: 'https://selodreamamaze.lojavirtualnuvem.com.br'
  },
]


export default function Home() {
  return (
    <div className='w-[100vw] h-[100vh] '>

      <div className='bg-red-300 absolute z-0 w-[100vw] h-[50vh]'></div>

      <div className="bg-white w-[100vw] h-[100vh] flex flex-col overflow-scrolls">

        <div className=' flex-3 content-center justify-items-center z-1'>
          <UserImage />
          <div className='pt-5'>
            <span className='text-[18px] font-medium'>@laislindinha</span>
          </div>
        </div>


        <div className='flex-4 content-center justify-items-center z-1'>
          <div className='bg-[#e7e7e7be] w-[90%] h-[60vh] rounded-[25px] justify-items-center pt-[20px] pb-[10px] overflow-scroll scrollbar-hide'>

            {
              links.map((e) => {
                return (
                  <UserLink
                    key={e.id}
                    text={e.title}
                    img={e.img}
                    link={e.link} />
                )
              })
            }

          </div>
        </div>

      </div>
      <footer className='bg-black w-[100%] h-[20%] mt-[50px]'>


      </footer>

    </div>

  )
}
