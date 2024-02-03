import health from '../assets/booking.png'
import todo from '../assets/todo.png'
import books from '../assets/books.jpg'
import weather from '../assets/weather.png'


let projects = [
  {
    name: 'Health Clinic',
    disc: `Develop a streamlined interface with a focus on user personas, understanding the distinct needs of patients,     healthcare providers, and administrators.
    Utilize user journey mapping to identify and eliminate friction points in the booking process, ensuring a seamless experience from start to finish.`,
    image: `${health}`,
    website: 'https://jade-rabanadas-479b96.netlify.app/',
    github: 'https://github.com/tajemouti/medical-appointments-front-end?tab=readme-ov-file',
    tags: ['React js', 'Postgres', 'Ruby on Rails', 'Redux Toolkit'],
  },
  {
    name: 'Weather App',
    disc: `Design a user-friendly interface with interactive maps and charts to allow users to visually explore air quality and weather data for different regions.
    Incorporate intuitive filters, enabling users to customize their data views based on parameters such as pollutants, timeframes, and geographical regions.`,
    image: `${weather}`,
    website: 'https://weather-app-wd6h.onrender.com/',
    github: 'https://github.com/shahzaman900/Weather-app',
    tags: ['React js', 'Redux Toolkit'],
  },
  {
    name: 'Awesome_Books',
    disc: `Curate an extensive collection of top-rated books encompassing every field, ensuring a diverse and well-rounded selection.
    Categorize books based on genres, topics, and industries, making it easy for users to explore and discover the best literature in their areas of interest.`,
    image: `${books}`,
    website: 'https://shahzaman900.github.io/Awesome_Books_ES6/',
    github: 'https://github.com/shahzaman900/Awesome_Books_ES6',
    tags: ['Javascript', 'Html', 'Css', 'Saas', 'Tailwind'],
  },
  {
    name: 'Budget app',
    disc: `This Ruby on Rails project is about a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.`,
    image: `${todo}`,
    website: 'https://budgetmap-v1.onrender.com/',
    github: 'https://github.com/shahzaman900/budget-app?tab=readme-ov-file',
    tags: ['Javascript', 'Html', 'Css', 'Saas', 'Tailwind']
  },

];

function ProjectCard() {
  return (
    <div className='flex gap-4 flex-wrap justify-center'>
      {projects.map((project, index) => (
        <div key={index} className='flex flex-col md:w-[40%] sm:w-[90%] min-w-60 p-4 rounded-md border-2 border-dotted hover:bg-accent/50 gap-4'>
          <div style={{ flex: 1 }}> {/* Use flex: 1 to make the image and content expand vertically */}
            <img className='w-full h-[40dvh] rounded overflow-hidden object-cover' src={project.image} alt="" />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'start', gap: '16px' }}>
            <div>
              <h4>{project.name}<a className="text-primary cursor-pointer after:content-['_|LiveDemo↗|']" href={project.website} target="_blank"></a> <a className="text-primary cursor-pointer after:content-['_Code↗|']" href={project.github} target="_blank"></a></h4>
              <p className='text-foreground/60 text-sm'>{project.disc}</p>
            </div>
            <div className='flex gap-2  flex-wrap'>
              {project.tags.map((tag, tagIndex) => (
                <p key={tagIndex} className='px-2 py-1 hover:bg-primary hover:text-white rounded-md text-sm border'>{tag}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
