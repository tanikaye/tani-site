
function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Tani, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I'm passionate about learning new technologies and building exciting web applications.
              While I'm not grinding leetCode, I'm improving my software skills and building fun apps.
              If you are an individual or small business and would like to hire me to build your website,
              please feel free to scroll down to the contact section and shoot me a message!
            </p>
          </div>
        </div>
    </div>
  </div>
  );
}

export default About;