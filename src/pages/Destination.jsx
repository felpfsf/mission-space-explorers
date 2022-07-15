import data from '../data/data.json'

const Destination = () => {
  return (
    <div className='w-full h-screen bg-[url("/assets/destination/background-destination-mobile.jpg")] sm:bg-[url("/assets/destination/background-destination-tablet.jpg")] xl:bg-[url("/assets/destination/background-destination-desktop.jpg")] bg-cover bg-center overflow-auto xl:overflow-hidden flex flex-col items-center justify-center'>
      <h5 className='heading--5 uppercase'>
        <strong className='mr-[11px]'>01</strong>
        Pick your destination
      </h5>
      <img className='w-[170px] h-[170px]' src={data.destinations[0].images.png} alt="" />
      <div className='w-[327px] flex flex-col items-center'>
        <ul className='heading--5 uppercase flex gap-4'>
          {data.destinations.map((destination, index) =>
            <li key={index}>{destination.name}</li>
          )}
        </ul>
        <h1 className='heading--1 uppercase'>{data.destinations[0].name}</h1>
        <p className='paragraph text-center'>{data.destinations[0].description}</p>
        <div className='w-full h-[1px] my-8 border border-white/25' ></div>
      </div>
    </div>
  )
}

export default Destination