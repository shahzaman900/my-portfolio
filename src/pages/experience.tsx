import ExperienceComp from '@/components/experienceComp';
import SocialMedia from '@/components/socialMedia';

// interface Experience {
//   date: string,
//   title: string,
//   company: string,
//   worklist: string[],
//   tags: string[]
// }



function Experience() {
  return (
    <>
      {/* <div className='flex flex-row md:pl-24 '> */}
        {/* <SocialMedia></SocialMedia> */}
          <div className='flex flex-1 p-4 pt-8 flex-col items-center justify-start gap-8 pb-20 '>
            <ExperienceComp />
        {/* </div> */}
      </div>
    </>
  )
}

export default Experience;