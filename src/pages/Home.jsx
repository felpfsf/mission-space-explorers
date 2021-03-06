import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen homeBackgrounds'>

      <div className='xl:h-full xl:pb-32 pt-28 sm:pt-40  flex flex-col items-center justify-center xl:grid xl:grid-cols-2 xl:justify-items-center xl:items-end xl:content-end'>

        <div className='w-[327px] sm:w-[450px] flex flex-col items-center xl:items-start'>
          <h5 className='pagesTitle uppercase text-palette-paragraph'>
            So, you want to travel to
          </h5>
          <h1 className='mainTitle uppercase'>Space</h1>
          <p className='paragraphText text-center xl:text-left'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link to={'/destination'}>
          <div className='group w-[150px] h-[150px] sm:w-60 sm:h-60 xl:w-[272px] xl:h-[272px] mt-8 bg-white rounded-full flex items-center justify-center cursor-pointer'>
            <p className='buttonText'>Explore</p>
            <div className='w-[150px] h-[150px] sm:w-60 sm:h-60 xl:w-[272px] xl:h-[272px] absolute rounded-full group-hover:scale-[1.45] group-hover:bg-white opacity-[0.1] z-10'></div>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Home