import { useState } from 'react'
import CrewMembers from '../components/CrewMembers'
import CrewPics from '../components/CrewPics'
import data from '../data/data.json'

const Crew = () => {
  const [content, setContent] = useState(0)
  return (
    <div className='w-full h-screen crewBackgrounds overflow-auto xl:overflow-hidden'>
      {/* <div className='absolute top-0 left-0 w-full h-screen bg-black/10'></div> */}
      <div className='w-[327px] md:w-[458px] xl:w-full xl:h-[85%] mt-[88px] md:mt-[136px] mx-auto grid justify-items-center xl:grid-cols-2 xl:grid-rows-2'>
        {/* page title */}
        <h5 className='pagesTitle text-white uppercase mb-8 md:-order-1 xl:order-none xl:place-self-center xl:row-end-1 xl:col-start-1 xl:col-end-1'>
          <strong className='mr-[11px] opacity-25'>02</strong>
          Meet your crew
        </h5>
        {/* crewPics */}
        <CrewPics index={content} />
        {/* separator mobile */}
        <div className='md:hidden w-full h-[1px] bg-[#64687c]' ></div>
        <div className='xl:w-[488px] my-8 flex flex-col md:flex-col-reverse items-center md:-order-1 xl:order-none xl:items-start xl:place-self-center xl:row-start-1 xl:row-end-3'>
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