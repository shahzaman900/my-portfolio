let experience = [
  {
    date: 'july 2021 -- present',
    title: 'Full Stack Developer',
    company: 'Cognitive Healthcare International',
    website: 'https://chi-technologies.com/',
    worklist: ['Optimized5+backend systems, cutting response time by 20%.', 'Managedproject timelines effectively, delivering 100% of projects on schedule, and showcasing strong', 'Guidedjunior developers on development strategies and innovative techniques.'],
    tags: ['Reactjs', 'Postgres', 'Nest js', 'Next js', 'Tailwind', 'Material UI', 'Redux Toolkit'],
  },
  {
    date: 'Jan 2019 – Jul 2021',
    title: 'Front End Developer',
    company: 'ON2SOL(PVT) LIMITED',
    website: 'https://www.on2sol.com/',
    worklist: ['Designedandimplemented a strategic plan, enhancing cohesion and streamlining development.', 'Enhanceddevelopment efficiency by 30%, ensuring timely delivery of new features for future projects.'],
    tags: ['Reactjs', 'Next js', 'Tailwind', 'Material UI', 'Redux Toolkit'],
  },
  {
    date: 'May 2018 – Jan 2019',
    title: 'UI Developer | UI/UX Designer',
    company: '+VISION',
    website: 'https://www.plusvis.com/',
    worklist: [' Implementedadesign system for future projects, ensuring consistency through collaborative development.', 'Fixedbugswithcode, design patterns, and miscellaneous occurrences during the project.'],
    tags: ['Figma', 'Html', 'CSS', 'Javascript', 'Angular'],
  }
];

function ExperienceComp() {
  return (
    <>
      {
        experience.map(exp => (
          <div className='flex md:flex-row flex-col gap-8 hover:bg-accent/50 md:p-8 sm:p-8 p-2 rounded-md'>
            <p className='text-foreground/40'>{exp.date}</p>
            <div>
              <h3>{exp.title}</h3>
              <h5>at<a className="text-primary cursor-pointer after:content-['_↗']" href={exp.website} target="_blank"> {exp.company}</a></h5>
              <div className='flex flex-col gap-4'>
                <ul className='flex gap-2 flex-col'>
                  {
                    exp.worklist.map((list) => (
                      <li className="text-sm text-foreground/60 before:content-['_※__']">{list}</li>
                    ))
                  }
                </ul>
                <div className='flex gap-4 flex-wrap'>
                  {
                    exp.tags.map((tag) => (
                      <p className='px-2 py-1 hover:bg-primary hover:text-white rounded-md text-sm border'>{tag}</p>
                    ))
                  }
                </div>
              </div>

            </div>
          </div>
        ))
      }
    </>
  )
}

export default ExperienceComp;