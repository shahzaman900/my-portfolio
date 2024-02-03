// import ExperienceComp from '@/components/experienceComp';
// import SocialMedia from '@/components/socialMedia';

// function Experience() {
//   return (
//     <>
//       <div className='flex flex-row md:pl-24 '>
//         <SocialMedia></SocialMedia>
//           <div className='flex flex-1 p-4 pt-8 flex-col items-center justify-start gap-8 pb-20 overflow-auto h-dvh'>
//             <ExperienceComp />
//         </div>
//       </div>
//     </>
//   )
// }

// export default Experience;


import { motion } from 'framer-motion';
import ExperienceComp from '@/components/experienceComp';
import SocialMedia from '@/components/socialMedia';

function Experience() {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide in from 50 units below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className='flex flex-row md:pl-24'>
        <SocialMedia></SocialMedia>
        <motion.div
          className='flex flex-1 p-4 pt-8 flex-col items-center justify-start gap-8 pb-20 overflow-auto h-dvh'
          initial='hidden'
          animate='visible'
          variants={slideInVariants}
        >
          <motion.div variants={slideInVariants}>
            <ExperienceComp />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Experience;
