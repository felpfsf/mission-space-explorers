import data from '../data/data.json'

const Crew = () => {
  return (
    <div className='w-full h-screen crewBackgrounds overflow-auto'>
      {/* <div className='absolute top-0 left-0 w-full h-screen bg-black/10'></div> */}
      <div className='w-[327px] md:w-[458px] mt-[88px] md:mt-[136px] mx-auto grid justify-items-center'>
        <h5 className='pagesTitle text-white uppercase mb-8 md:-order-1'>
          <strong className='mr-[11px] opacity-25'>02</strong>
          Meet your crew
        </h5>
        <img className='w-[177px] md:w-[456px]' src={data.crew[0].images.png} alt="" />
        <div className='md:hidden w-full h-[1px] bg-[#64687c]' ></div>
        <div className='my-8 flex flex-col md:flex-col-reverse items-center md:-order-1'>
          {/* buttons */}
          <ul className='mb-8 flex items-center gap-4'>
            {data.crew.map((crewMember) =>
              <li key={crewMember}>
                <div className='w-4 h-4 hover:bg-white bg-white/20 rounded-full cursor-pointer'></div>
              </li>
            )}
          </ul>
          {/* content */}
          <div className='flex flex-col items-center'>
            <h5 className='crewRole uppercase'>{data.crew[0].role}</h5>
            <h1 className='crewTechName uppercase'>{data.crew[0].name}</h1>
            <p className='paragraphText text-center xl:text-left my-4'>{data.crew[0].bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew