import { useState } from 'react'
import Destinations from '../components/Destinations'
import Planets from '../components/Planets'
import data from '../data/data.json'

const Destination = () => {
  const [content, setContent] = useState(0)

  return (
    <div className='w-full h-screen destinationBackgrounds overflow-auto xl:overflow-hidden'>
      <div className='mt-[88px] md:mt-[136px] xl:mt-[212px] grid justify-items-center xl:grid-cols-2 xl:auto-rows-auto'>
        <h5 className='pagesTitle text-white uppercase mb-8 xl:mb-16 md:relative right-48 xl:row-start-1'>
          <strong className='mr-[11px]'>01</strong>
          Pick your destination
        </h5>
        <Planets index={content} />
        <div className='w-[327px] md:w-[575px] xl:w-[445px] mt-7 flex flex-col xl:items-start'>
          <ul className='destMenu uppercase flex gap-[26px] justify-center'>
            {data.destinations.map((destination, index) =>
              <li className='hover:text-white hover:underline underline-offset-8 cursor-pointer' key={index} onClick={() => setContent(index)}>{destination.name}</li>
            )}
          </ul>

          <Destinations index={content} />

        </div>
      </div>

    </div >
  )
}

export default Destination