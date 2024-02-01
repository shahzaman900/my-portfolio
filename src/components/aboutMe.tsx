import { Button } from './ui/button';

function AboutMe() {
  return (
    <>
      <div className='flex gap-8 flex-col md:w-3/5 w-11/12 pb-14 pt-8'>
        <h1>About me</h1>
        <div className='flex flex-col gap-2'>
          <h6 className='text-xl text-foreground/80 '><span className='text-primary underline underline-offset-4'>I'm Software engineer</span></h6>
          <p>with a background in developing efficient software applications in a global market. 4+ years of
            industry experience, including mentoring 10+ junior developers to achieve concrete goals on a strict deadline. Strong
            skills include React, Next js, Nest js, and Node js. Proficient in problem-solving, collaborating in remote teams and
            quickly learning new languages.</p>
        </div>
        <div>
          <Button variant={'outline'}>Get My Resume</Button>
        </div>
      </div>
    </>
  )
}

export default AboutMe;