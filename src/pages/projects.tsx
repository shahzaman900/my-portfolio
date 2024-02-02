import ProjectCard from '@/components/projectCard';
import SocialMedia from '@/components/socialMedia';

function Projects() {
  return (
    <>
      {/* <div className='flex flex-row md:pl-24 '> */}
        {/* <SocialMedia></SocialMedia> */}
        <div className='flex flex-col gap-4 p-4 '>
          <div className='flex items-center justify-center flex-wrap gap-4 mb-16'>
            <ProjectCard />
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Projects;