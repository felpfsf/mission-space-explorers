import { useState } from 'react'
import Technologies from '../components/Technologies'
import TechnologiesImg from '../components/TechnologiesImg'
import data from '../data/data.json'

const Technology = () => {
  const [content, setContent] = useState(0)
  return (
    <div className='w-full h-screen techBackgrounds overflow-auto'>
      <div className='w-full mt-[88px] md:mt-[136px] xl:mt-[212px] grid gap-8 xl:auto-cols-auto xl:auto-rows-auto'>

        <h5 className='pagesTitle text-white uppercase mb-8 xl:row-start-1 xl:row-end-1 xl:col-start-1 xl:col-span-2 xl:ml-20 2xl:ml-48 place-self-center xl:place-self-start'>
          <strong className='mr-[11px] opacity-25'>03</strong>
          Space launch 101
        </h5>
        {/* image */}
        {/* <img className='xl:hidden place-self-stretch' src={data.technology[0].images.landscape} alt="" />
        <img className='hidden xl:block xl:row-start-1 xl:row-span-2 xl:col-start-3 xl:place-self-end' src={data.technology[0].images.portrait} alt="" /> */}
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
        {/* <div className='w-[327px] md:w-[458px] xl:w-[470px] flex flex-col text-center xl:text-left place-self-center'>
          <h5 className='techTitle uppercase'>The Termilogy</h5>
          <h1 className='crewTechName uppercase'>{data.technology[0].name}</h1>
          <p className='paragraphText text-center xl:text-left'>{data.technology[0].description}</p>
        </div> */}
        <Technologies index={content} />
      </div>
    </div>
  )
}

export default Technology