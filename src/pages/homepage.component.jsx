import CustomButton from '../components/custom-button/CustomButton.component';


const Home = () => {
    return (
        <div id='home' className='flex flex-col' style={{ backgroundColor: '#211B34' }}>
            <div className='first-section sm:px-6 sm:pt-24 sm:items-center  sm:flex-col sm:space-y-24 sm:justify-around py-12 px-24 flex flex-row justify-between sm:space-x-0 space-x-6'>
                <div className='flex flex-col text-left font-bold space-y-5 flex-grow '>
                    <p className='sm:text-3xl sm:leading-none text-6xl leading-snug text-white '>Watch it HD</p>
                    <p className='max-w-lg text-white text-gray-300'>Discover some of the most amazing contents and watch them in HD</p>
                    <CustomButton text={'Watch'}/>
                </div>
                <div className='sm:w-80 sm:h-80 w-1/2'>
                    <img style={{ borderRadius: '8px' }} alt ='hoodies' src={require('../assets/images/baby-groot.jpg').default}/>
                </div>    
            </div>
            <div className='second-section sm:px-6 overflow-x-hidden  sm:bg-light-green flex flex-col justify-center space-y-8 py-12 px-24 items-center' style={{ backgroundColor: '#211B34' }}>
                <div className='flex flex-col items-center space-y-6'>
                    <h2 className='sm:text-2xl text-4xl font-bold text-white'>Most Watched</h2>
                    <p className='sm:text-sm max-w-lg text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ape, quo porro!</p>
                </div>
                <div className='flex  sm:w-screen sm:px-6 sm:justify-between overflow-x-scroll flex-row justify-center space-x-6'>
                    <div className='flex flex-col space-y-6 sm:flex-none sm:w-72 '>
                        <img className='rounded-lg' alt ='Orange Hoodie' src={require('../assets/images/orange.png').default}/>
                        <label className='text-lg font-semibold text-gray-300'>Hoodies</label>
                    </div>    
                    <div className='flex flex-col   space-y-6 sm:flex-none sm:w-72'>
                        <img className='rounded-lg' alt ='Ash Hoodie' src={require('../assets/images/back.png').default}/>
                        <label className='text-lg font-semibold text-gray-300'>Zip-up Hoodies</label>
                    </div>    
                    <div className='flex flex-col  space-y-6 sm:flex-none sm:w-72'>
                        <img className='rounded-lg' alt ='Ash Hoodie' src={require('../assets/images/back.png').default}/>
                        <label className='text-lg font-semibold text-gray-300'>T-Shirts</label>
                    </div>  
                </div>
            </div>
            <div className='third-section  sm:overflow-x-hidden sm:px-6 sm:pt-6 sm:pb-12  flex flex-col py-12 px-24 space-y-12 justify-center ' style={{ backgroundColor: '#211B34' }}>
                <div className='flex flex-col items-center space-y-6'>
                    <h2 className='text-3xl	font-bold text-white'>Trending</h2>
                    <p className='max-w-md self-center text-gray-300'>explore some of the most trending contents globally</p>
                </div>
                <div className='flex flex-row justify-between sm:px-6 sm:space-x-6 sm:w-screen  sm:self-start sm:overflow-x-scroll'>
                    <div className='flex flex-col space-y-3 sm:flex-none '>
                        <img className='rounded-lg w-72 ' alt = 'testing' src={require('../assets/images/currly.png').default}/>
                        <label className='text-base text-gray-300'>Product Name</label>
                        <lable className='font-semibold'>N15,000</lable>
                    </div>
                    <div className='flex flex-col space-y-3 sm:flex-none'>
                        <img className='rounded-lg w-72 ' alt = 'testing' src={require('../assets/images/yellow.png').default}/>
                        <label className='text-base text-gray-300'>Product Name</label>
                        <lable className='font-semibold'>N12,000</lable>
                    </div>
                    <div className='flex flex-col space-y-3 sm:flex-none'>
                        <img className='rounded-lg w-72 ' alt = 'testing' src={require('../assets/images/ash.png').default}/>
                        <label className='text-base text-gray-300'>Product Name</label>
                        <lable className='font-semibold'>N10,000</lable>
                    </div>
                </div>
                <div className='sm:self-start self-center'>
                    <CustomButton text={'Shop'} width={'144px'} height={'48px'}/>
                </div>
            </div>
            <div className='fourth-section  sm:space-y-12 sm:flex-col sm:px-6 sm:space-x-0 flex flex-row justify-around sm:justify-between py-12 px-24 space-x-6'>
                <div className='flex flex-col max-w-lg  text-left justify-center space-y-6'>
                    <h2 className='sm:text-2xl text-3xl	font-bold text-white'>Unleash your creativity, be a content creator</h2>
                    <p className=' sm:text-sm text-gray-300'>Join thousands of content creators and upload what you can offer</p>
                </div>
                <div className='max-w-md'>
                    <img className='rounded-lg' alt = 'testing' src={require('../assets/images/woman.png').default}/>
                </div>
            </div>
        </div>
    )
}

export default Home;