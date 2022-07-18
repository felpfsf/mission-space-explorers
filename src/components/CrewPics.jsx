import data from '../data/data.json'

const CrewPics = ({index}) => {
  return (
    <>
      <img className='w-[177px] md:w-[456px] xl:w-[550px] xl:row-span-3 xl:self-end row-span-3' src={data.crew[index].images.png} alt="" />

    </>
  )
}

export default CrewPics