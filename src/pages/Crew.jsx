import { useState } from 'react'
import CrewMembers from '../components/CrewMembers'
import CrewPics from '../components/CrewPics'
import data from '../data/data.json'

const Crew = () => {
  const [content, setContent] = useState(0)
  return (
    <div className='w-full h-screen crewBackgrounds overflow-auto'>
      {/* <div className='absolute top-0 left-0 w-full h-screen bg-black/10'></div> */}
      <div className='w-[327px] md:w-[458px] xl:w-full mt-[88px] md:mt-[136px] xl:mt-[150px] mx-auto grid justify-items-center xl:grid-cols-2 xl:auto-rows-auto'>
        {/* page title */}
        <h5 className='pagesTitle text-white uppercase mb-8 md:-order-1 xl:order-none xl:place-self-center'>
          <strong className='mr-[11px] opacity-25'>02</strong>
          Meet your crew
        </h5>
        {/* crewPics */}
        <CrewPics index={content} />
        {/* separator mobile */}
        <div className='md:hidden w-full h-[1px] bg-[#64687c]' ></div>
        <div className='xl:w-[488px] my-8 flex flex-col md:flex-col-reverse items-center md:-order-1 xl:order-none xl:items-start xl:place-self-center'>
          {/* buttons */}
          <ul className='mb-8 flex items-center gap-4'>
            {data.crew.map((crewMember, index) =>
              <li key={index}>
                <div className='w-4 h-4 hover:bg-white bg-white/20 rounded-full cursor-pointer' onClick={() => setContent(index)}></div>
              </li>
            )}
          </ul>
          {/* content */}
          <CrewMembers index={content} />
        </div>
      </div>
    </div>
  )
}

export default Crew