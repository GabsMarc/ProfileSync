
import UserLink from '../components/userLink'
import UserImage from '../components/userImage'


export default function Home() {
  return (

    <div className="bg-white w-[100vw] h-[100vh] flex flex-col">

      <div className=' bg-red-300 flex-3 content-center justify-items-center'>
        <UserImage />
        <div className='pt-5'>
          <span className='text-[18px] font-medium'>@gabsmarcc</span>
        </div>
      </div>


      <div className='bg-purple-300 flex-4 content-center justify-items-center '>
        <div className='bg-[#e7e7e7] w-[90%] h-[95%] rounded-[25px] justify-items-center pt-[10px] pb-[10px] overflow-scroll scrollbar-hide'>
          <UserLink />
          <UserLink />
          <UserLink />
          <UserLink />
          <UserLink />
          <UserLink />
          <UserLink />
          <UserLink />
          <UserLink />
        </div>
      </div>

    </div>

  )
}
