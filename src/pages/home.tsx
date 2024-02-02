import Introduction from '@/components/intro';
import SocialMedia from '@/components/socialMedia';

function Home() {
  return (
    <>
      {/* <div className='flex flex-row md:pl-24'> */}
        {/* <SocialMedia></SocialMedia> */}
        <div className='flex flex-1 items-start md:items-center sm:items-center justify-center pb-4 p-2 overflow-auto h-dvh'>
          <Introduction />
        </div>
      {/* </div> */}
    </>
  )
}

export default Home;