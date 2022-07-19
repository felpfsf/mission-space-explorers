import data from '../data/data.json'

const TechnologiesImg = ({index}) => {
  return (
    <>
      <img className='xl:hidden place-self-stretch' src={data.technology[index].images.landscape} alt="" />
      <img className='hidden xl:block xl:row-start-1 xl:row-span-2 xl:col-start-3 xl:place-self-end' src={data.technology[index].images.portrait} alt="" />
    </>
  )
}

export default TechnologiesImg