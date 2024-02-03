// import ProjectCard from '@/components/projectCard';
// import SocialMedia from '@/components/socialMedia';

// function Projects() {
//   return (
//     <>
//       <div className='flex flex-row md:pl-24 '>
//         <SocialMedia></SocialMedia>
//         <div className='flex flex-col gap-4 p-4 overflow-auto h-dvh'>
//           <div className='flex items-center justify-center flex-wrap gap-4 mb-16'>
//             <ProjectCard />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Projects;


import { motion } from 'framer-motion';
import ProjectCard from '@/components/projectCard';
import SocialMedia from '@/components/socialMedia';

function Projects() {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide in from 50 units below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className='flex flex-row md:pl-24'>
        <SocialMedia></SocialMedia>
        <motion.div
          className='flex flex-col gap-4 p-4 overflow-auto h-dvh'
          initial='hidden'
          animate='visible'
          variants={slideInVariants}
        >
          <div className='flex items-center justify-center flex-wrap gap-4 mb-16'>
            <motion.div variants={slideInVariants}>
              <ProjectCard />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Projects;
