import data from '../data/data.json'

const Technology = () => {
  return (
    <div className='w-full h-screen techBackgrounds overflow-auto'>
      <div className='w-full h-screen mx-auto'>
        <h5 className='pagesTitle text-white uppercase mb-8 md:-order-1 xl:order-none xl:place-self-center xl:row-end-1 xl:col-start-1 xl:col-end-1'>
          <strong className='mr-[11px] opacity-25'>03</strong>
          Space launch 101
        </h5>
        <img src={data.technology[0].images.landscape} alt="" />
        <div className='w-[327px] flex flex-col'>
          <h5 className='techTitle uppercase'>The Termilogy</h5>
          <h1 className='crewTechName uppercase'>{data.technology[0].name}</h1>
          <p className='paragraphText text-center xl:text-left'>{data.technology[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default Technology