import data from '../data/data.json'


const Destinations = ({index}) => {
  // console.log(props)
  return (
    <>
      <h1 className='destName uppercase mx-auto xl:mx-0 '>{data.destinations[index].name}</h1>
      <p className='paragraphText text-center xl:text-left'>{data.destinations[index].description}</p>
      <div className='w-full h-[1px] my-8 bg-[#383B4B]' ></div>

      <div className='flex flex-col md:flex-row justify-evenly gap-8 xl:gap-20'>
        <div className='flex flex-col items-center xl:items-start gap-3'>
          <h6 className='destTravel'>AVG. DISTANCE</h6>
          <h5 className='destTravelContent uppercase'>{data.destinations[index].distance}</h5>
        </div>
        <div className='flex flex-col items-center xl:items-start gap-3'>
          <h6 className='destTravel uppercase'>Est. travel time</h6>
          <h5 className='destTravelContent uppercase'>{data.destinations[index].travel}</h5>
        </div>
      </div>
    </>
  )
}

export default Destinations