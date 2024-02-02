import { TypeAnimation } from 'react-type-animation';

function Introduction() {
  return (
    <div className=' flex gap-8 flex-col md:w-3/5 p-4 pb-14'>
      <h6 className='md:text-xl sm:text-lg text-lg text-foreground/80 pr-2'>Hi, my name is <span className='px-3 py-1 bg-primary rounded text-white'>Shah Zaman</span></h6>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'I design & build pixel-perfect, accessible products for the web',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'I design & build pixel-perfect, accessible products for mobile',
          1000,
        ]}
        wrapper="h1"
        speed={30}
        // style={{ fontSize: '2em', display: 'inline-block' }}
        className=''
        repeat={Infinity}
      />
      <h6 className='text-xl text-foreground/80 '><span className='text-primary pr-2'>----</span>Lead frontend team at <span className='text-white font-bold'>Cognitive Healthcare International</span></h6>
    </div>
  )
}

export default Introduction;