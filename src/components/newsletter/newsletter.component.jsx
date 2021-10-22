import Custombutton from '../custom-button/CustomButton.component'

const NewsLetter = () => {
    
    return (
        <div className='flex flex-col sm:space-y-8 sm:px-6 sm:pt-3 sm:pb-4 space-y-12 justify-center py-12 px-24 mb-12'>
            <div className='space-y-3 flex flex-col items-center'>
                <h2 className='sm:text-xl font-bold text-4xl'>Join Our Newsletter</h2>
                <p className='sm:text-sm text-base' style={{ color: '#73758C' }}>Promotions, new products and sales. Directly to your inbox</p>
            </div>           
            <form className='flex sm:flex-col sm:space-y-4 sm:space-x-0 sm:w-full flex-row space-x-3 self-center items-center ' onSubmit={()=> alert('submitted')}>
                <input className='border-gray-200 sm:w-full w-96 border-2 px-4 py-3 rounded-lg' type='email' placeholder='--Enter your email address--' />
                <div className='sm:hidden'>
                    <Custombutton text={'Submit'} width={'144px'} height={'48px'}/>
                </div>
                <div className='hidden sm:block w-full'>
                    <Custombutton text={'Submit'} width={'100%'} height={'48px'}/>
                </div>
            </form>
        </div>
    )
}

export default NewsLetter;

