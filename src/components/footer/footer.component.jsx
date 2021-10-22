import TwitterSVG from '../svg/twitterSVG.component'
import FaceBookSVG from '../svg/facebookSVG.component'
import InstagramSVG from '../svg/instagramSVG.component'

const Footer = () => {

    return (
        <footer id='footer' className='flex sm:px-6 flex-col py-10 px-24 text-left space-y-6 text-white' style={{ backgroundColor: '#171C17' }} >
            <div className='flex sm:flex-col sm:space-x-0 sm:space-y-12 flex-row flex-grow space-x-96'>
                <div className='sm:flex sm:flex-col sm:space-y-6 grid grid-cols-1 gap-y-6'>
                    <h3 className='font-semibold'>STORE LOGO</h3>
                    <div className='flex flex-row space-x-6'>
                        <TwitterSVG/>
                        <FaceBookSVG/>
                        <InstagramSVG/>
                    </div>
                    <div className='sm:space-y-3 space-y-6'>
                        <p className='text-sm'>Storename@gmail.com</p>
                        <p className='text-sm'>09054332134</p>
                    </div>
                </div>
                <div className='sm:self-start self-center'>
                    <div className='sm:grid-cols-1 sm:gap-y-8 grid grid-cols-2 gap-x-24'>
                        <div className='grid gap-y-6'>
                            <h3 className='font-semibold'>STORE</h3>
                            <span className='text-sm'>Refund Policy</span>
                            <span className='text-sm'>FAQ</span>
                            <span className='text-sm'>Contact Us</span>
                        </div>
                        <div className='grid gap-y-6'>
                            <h3 className='font-semibold'>OTHERS</h3>
                            <span className='text-sm'>Terms of Service </span>
                            <span className='text-sm'>Privacy Policy</span>
                            <span className='text-sm'>Tracking</span>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{borderColor: '#73758C'}}/>
            <div>
                <span className='text-sm'>&copy; Store name. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer;