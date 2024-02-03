// import ContactForm from '@/components/form';
// import SocialMedia from '@/components/socialMedia';

// function Contact() {
//   return (
//     <>
//       <div className='flex flex-row md:pl-24 '>
//         <SocialMedia></SocialMedia>
//         <div className='flex flex-col flex-1 items-start md:items-center sm:items-center justify-center p-4 md:py-0 py-24 overflow-auto h-dvh'>
//           <div className='flex flex-col justify-center gap-4'>
//             <h1>Contact</h1>
//             <p className='text-foreground/60'>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Contact;

import { motion } from 'framer-motion';
import ContactForm from '@/components/form';
import SocialMedia from '@/components/socialMedia';

function Contact() {
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 }, // Slide in from 50 units below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className='flex flex-row md:pl-24'>
        <SocialMedia></SocialMedia>
        <motion.div
          className='flex flex-col flex-1 items-start md:items-center sm:items-center justify-center p-4 md:py-0 py-24 overflow-auto h-dvh'
          initial='hidden'
          animate='visible'
          variants={slideInVariants}
        >
          <div className='flex flex-col justify-center gap-4'>
            <h1>Contact</h1>
            <p className='text-foreground/60'>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
            <motion.div
              variants={slideInVariants}
            >
              <ContactForm />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Contact;
