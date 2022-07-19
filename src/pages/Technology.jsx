import { useState } from 'react'
import Technologies from '../components/Technologies'
import TechnologiesImg from '../components/TechnologiesImg'
import data from '../data/data.json'

const Technology = () => {
  const [content, setContent] = useState(0)
  return (
    <div className='w-full h-screen techBackgrounds overflow-auto xl:overflow-hidden'>
      <div className='w-full mt-[88px] md:mt-[136px] xl:mt-[175px] 2xl:mt-[212px] grid gap-8 xl:auto-cols-auto xl:auto-rows-auto'>

        <h5 className='pagesTitle text-white uppercase mb-8 xl:row-start-1 xl:row-end-1 xl:col-start-1 xl:col-span-2 xl:ml-20 2xl:ml-48 place-self-center xl:place-self-start'>
          <strong className='mr-[11px] opacity-25'>03</strong>
          Space launch 101
        </h5>
        {/* image */}
        <TechnologiesImg index={content} />
        {/* navigation */}
        <div className='flex flex-row xl:flex-col gap-4 xl:row-start-2 place-self-center'>
          {data.technology.map((tech, index) =>
            <div className='w-10 h-10 xl:w-20 xl:h-20 hover:bg-white border border-white text-white hover:text-palette-accent rounded-full flex items-center justify-center  cursor-pointer' key={index} onClick={() => setContent(index)}>
              <span className='buttonText'>{index + 1}</span>
            </div>
          )}
        </div>
        {/* content */}
        <Technologies index={content} />
      </div>
    </div>
  )
}

export default Technology