import { Button } from './ui/button';

let skills = [
  {
    name: 'Front-End',
    skill: ['JavaScript', 'React', 'Redux', 'Next js', 'HTML5', 'CSS3', 'Saas', 'Material UI', 'Tailwind', 'Figma']
  },
  {
    name: ' Back-End',
    skill: ['Ruby', 'Rails', 'Postgres', 'Prisma', 'Express', 'MongoDB', 'Nest js']
  },
  {
    name: 'Tools & Methods',
    skill: ['Git', 'GitHub', 'Netlify', 'Mobile / Responsive Development', 'RSpec', 'TDD', 'Chrome Dev Tools']
  },
  {
    name: 'Professional',
    skill: ['Remote Pair-Programming', 'Team work', 'Mentoring']
  },
]

function AboutMe() {
  return (
    <>
      <div className='flex gap-8 flex-col md:w-4/5 w-11/12 pb-14 pt-8'>
        <h1>About me</h1>
        <div className='flex flex-col gap-2'>
          <h6 className='text-xl text-foreground/80 '><span className='text-white italic font-bold'>I'm Software engineer</span></h6>
          <p>with a background in developing efficient software applications in a global market. 4+ years of
            industry experience, including mentoring 10+ junior developers to achieve concrete goals on a strict deadline. Strong
            skills include React, Next js, Nest js, and Node js. Proficient in problem-solving, collaborating in remote teams and
            quickly learning new languages.</p>
        </div>
        <div className='flex flex-col gap-2'>
          <h3>SKILLS</h3>
          <div className='flex gap-4 flex-col'>
            {
              skills.map(teck => (
                <div className='flex gap-4'>
                  <h5 className='min-w-fit text-primary font-bold'>{teck.name}:</h5>
                  <ul className='flex gap-2 flex-wrap'>
                    {
                      teck.skill.map(skill => (
                        <li className='px-2 py-1 hover:bg-primary hover:text-white rounded-md text-sm border'>{skill}</li>
                      ))
                    }
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <a href="../assets/Shah Zaman - Full Stack Developer.pdf" download>
            <Button variant={'outline'}>Get My Resume</Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default AboutMe;