import data from '../data/data.json'

const Technologies = ({index}) => {
  return (
    <>
      <div className='w-[327px] md:w-[458px] xl:w-[470px] pb-10 sm:pb-0 flex flex-col text-center xl:text-left place-self-center'>
        <h5 className='techTitle uppercase'>The Termilogy</h5>
        <h1 className='crewTechName uppercase'>{data.technology[index].name}</h1>
        <p className='paragraphText text-center xl:text-left'>{data.technology[index].description}</p>
      </div>
    </>
  )
}

export default Technologies