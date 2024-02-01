import AboutMe from '@/components/aboutMe';
import SocialMedia from '@/components/socialMedia';

function About() {
  return (
    <>
      <div className='flex flex-row md:pl-24'>
        <SocialMedia></SocialMedia>
        <div className='flex flex-1 pb-8 items-start md:items-center sm:items-center justify-center overflow-auto h-dvh'>
          <AboutMe></AboutMe>
        </div>
      </div>
    </>
  )
}

export default About;