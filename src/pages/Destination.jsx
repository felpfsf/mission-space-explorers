import React from 'react'
import data from '../data/data.json'

const Destination = () => {
  return (
    <div className='w-full h-screen bg-[url(/assets/destination/background-destination-mobile.jpg))] sm:bg-[url(/assets/destination/background-destination-mobile.jpg))] xl:bg-[url(/assets/destination/background-destination-mobile.jpg))] bg-cover bg-center overflow-auto xl:overflow-hidden'>

      <div className='w-[327px] mx-auto mt-20 flex flex-col items-center'>

        <h5 className='heading--5 uppercase text-white py-8'>
          <strong className='text-white/25 mr-[18px]'>01</strong>
          Pick your destination
        </h5>
        <img src={data.destinations[0].images.png} alt="" />
        <div className='flex flex-col items-center justify-center'>
          {/* <div className='text-white py-8 flex gap-[26px]'>
            {data.destinations.map((destination, index) => {
              return (
                <p className='heading--5 uppercase' key={index}>{destination.name}</p>
              )
            })}
          </div> */}

          <ul className='heading--5 uppercase my-8 flex flex-row gap-6'>
            {data.destinations.map((destination, index) =>
              <li className='hover:text-white hover:underline underline-offset-8 cursor-pointer' key={index}>{destination.name}</li>
            )}
          </ul>
          <h1 className='heading--1 uppercase'>{data.destinations[0].name}</h1>
          <p className='paragraph text-center'>{data.destinations[0].description}</p>

          <hr className='w-full my-8 border border-white/25' />

          <div className='flex flex-col gap-8'>
            <div className='flex flex-col items-center gap-3'>
              <h4 className='sub--heading--2 text-palette-paragraph uppercase'>Avg. Distance</h4>
              <h3 className='sub--heading--1 text-white uppercase'>{data.destinations[0].distance}</h3>
            </div>
            <div className='flex flex-col items-center gap-3'>
              <h4 className='sub--heading--2 text-palette-paragraph uppercase'>Est. Travel Time</h4>
              <h3 className='sub--heading--1 text-white uppercase'>{data.destinations[0].travel}</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Destination