import data from '../data/data.json'


const Planets = ({index}) => {
  return (
    <>
      <img className='w-[170px] h-[170px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] xl:col-start-1 col-end-1' src={data.destinations[index].images.png} alt="" />
    </>
  )
}

export default Planets