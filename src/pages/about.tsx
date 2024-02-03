// import AboutMe from '@/components/aboutMe';
// import SocialMedia from '@/components/socialMedia';

// function About() {
//   return (
//     <>
//       <div className='flex flex-row md:pl-24'>
//         <SocialMedia></SocialMedia>
//         <div className='flex flex-1 pb-8 items-start md:items-center sm:items-center justify-center overflow-auto h-dvh'>
//           <AboutMe></AboutMe>
//         </div>
//       </div>
//     </>
//   )
// }

// export default About;

import { motion } from 'framer-motion';
import AboutMe from '@/components/aboutMe';
import SocialMedia from '@/components/socialMedia';

function About() {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide in from 50 units below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className='flex flex-row md:pl-24'>
        <SocialMedia></SocialMedia>
        <motion.div
          className='flex flex-1 pb-8 items-start md:items-center sm:items-center justify-center overflow-auto h-dvh'
          initial='hidden'
          animate='visible'
          variants={slideInVariants}
        >
          <AboutMe></AboutMe>
        </motion.div>
      </div>
    </>
  );
}

export default About;

