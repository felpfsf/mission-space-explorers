import { useState } from 'react'
import data from '../data/data.json'

const Technology = () => {
  const [content, setContent] = useState(0)
  return (
    <div className='w-full h-screen techBackgrounds overflow-auto'>
      <div className='w-full my-[88px] md:my-[136px] grid place-items-center gap-8'>
        <h5 className='pagesTitle text-white uppercase mb-8 md:-order-1 xl:order-none xl:place-self-center xl:row-end-1 xl:col-start-1 xl:col-end-1'>
          <strong className='mr-[11px] opacity-25'>03</strong>
          Space launch 101
        </h5>
        <img src={data.technology[0].images.landscape} alt="" />
        <div className='flex flex-row gap-4'>
          {data.technology.map((tech, index) =>
            <div className='w-10 h-10 hover:bg-white border border-white text-white hover:text-palette-accent rounded-full flex items-center justify-center cursor-pointer' key={index} onClick={() => setContent(console.log(index))}>
              <span className='buttonText'>{index + 1}</span>
            </div>
          )}
        </div>
        <div className='w-[327px] md:w-[458px] flex flex-col text-center'>
          <h5 className='techTitle uppercase'>The Termilogy</h5>
          <h1 className='crewTechName uppercase'>{data.technology[0].name}</h1>
          <p className='paragraphText text-center xl:text-left'>{data.technology[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default Technology