import { Facebook, Github, Linkedin, Mail, Phone } from 'lucide-react'


function SocialMedia() {
  return (
    <>
      <div className='flex flex-col gap-4 sticky justify-center h-screen md:px-5 sm:px-5 px-2  border-l-2 border-r-2 border-dotted pb-14'>
        <a href="https://www.facebook.com/shah.z.marwat/" target="_blank" className='p-2 border rounded-md hover:bg-accent'><Facebook /></a>
        <a href="https://github.com/shahzaman900" target="_blank" className='p-2 border rounded-md hover:bg-accent'><Github /></a>
        <a href="https://www.linkedin.com/in/shahzaman900/" target="_blank" className='p-2 border rounded-md hover:bg-accent'><Linkedin /></a>
        <a href="mailto:shahzamanlive2@gmail.com" target="_blank" className='p-2 border rounded-md hover:bg-accent'><Mail /></a>
        <a href="https://wa.me/+923450513438" target="_blank" className='p-2 border rounded-md hover:bg-accent'><Phone /></a>
      </div>
    </>
  )
}

export default SocialMedia;