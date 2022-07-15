import data from '../data/data.json'

const Destination = () => {
  return (
    <div className='w-full h-screen destinationBackgrounds overflow-auto xl:overflow-hidden'>
      <div className='mt-[88px] md:mt-[136px] xl:mt-[212px] grid justify-items-center xl:grid-cols-2 xl:auto-rows-auto'>
        <h5 className='pagesTitle text-white uppercase mb-8 xl:mb-16 md:relative right-48 xl:row-start-1'>
          <strong className='mr-[11px]'>01</strong>
          Pick your destination
        </h5>
        <img className='w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px] xl:col-start-1 col-end-1' src={data.destinations[0].images.png} alt="" />
        <div className='w-[327px] md:w-[575px] xl:w-[445px] mt-7 flex flex-col xl:items-start'>
          <ul className='destMenu uppercase flex gap-[26px] justify-center'>
            {data.destinations.map((destination, index) =>
              <li className='hover:text-white hover:underline underline-offset-8 cursor-pointer' key={index}>{destination.name}</li>
            )}
          </ul>

          <h1 className='destName uppercase mx-auto xl:mx-0 '>{data.destinations[0].name}</h1>
          <p className='paragraphText text-center xl:text-left'>{data.destinations[0].description}</p>
          <div className='w-full h-[1px] my-8 bg-[#383B4B]' ></div>
          <div className='flex flex-col md:flex-row justify-evenly gap-8 xl:gap-20'>
            <div className='flex flex-col items-center xl:items-start gap-3'>
              <h6 className='destTravel'>AVG. DISTANCE</h6>
              <h5 className='destTravelContent uppercase'>{data.destinations[0].distance}</h5>
            </div>
            <div className='flex flex-col items-center xl:items-start gap-3'>
              <h6 className='destTravel uppercase'>Est. travel time</h6>
              <h5 className='destTravelContent uppercase'>{data.destinations[0].travel}</h5>
            </div>
            
          </div>

        </div>
      </div>

    </div>
  )
}

export default Destination