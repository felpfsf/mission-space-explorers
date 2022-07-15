import data from '../data/data.json'

const Destination = () => {
  return (
    <div className='w-full h-screen destinationBackgrounds overflow-auto xl:overflow-hidden flex flex-col items-center justify-center'>
      <h5 className='pagesTitle text-white uppercase'>
        <strong className='mr-[11px]'>01</strong>
        Pick your destination
      </h5>
      <img className='w-[170px] h-[170px]' src={data.destinations[0].images.png} alt="" />
      <div className='w-[327px] flex flex-col items-center'>
        <ul className='destMenu uppercase flex gap-[26px]'>
          {data.destinations.map((destination, index) =>
            <li key={index}>{destination.name}</li>
          )}
        </ul>
        <h1 className='destName uppercase'>{data.destinations[0].name}</h1>
        <p className='paragraphText text-center'>{data.destinations[0].description}</p>
        <div className='w-full h-[1px] my-8 bg-[#383B4B]' ></div>
        <div>
          <h6>AVG. DISTANCE</h6>
          <h6>{data.destinations[0].distance}</h6>
        </div>
        <div>
          <h6>Est. travel time</h6>
          <h6>{data.destinations[0].travel}</h6>
        </div>
      </div>
    </div>
  )
}

export default Destination