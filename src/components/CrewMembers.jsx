import data from '../data/data.json'

const CrewMembers = ({index}) => {
  return (
    <>
      <div className='flex flex-col items-center xl:items-start xl:mb-32'>
        <h5 className='crewRole uppercase'>{data.crew[index].role}</h5>
        <h1 className='crewTechName uppercase'>{data.crew[index].name}</h1>
        <p className='paragraphText text-center xl:text-left my-4 max-w-[444px]'>{data.crew[index].bio}</p>
      </div>
    </>
  )
}

export default CrewMembers