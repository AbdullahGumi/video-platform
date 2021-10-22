import { Link }  from 'react-router-dom';

import Footer from '../components/footer/footer.component'


const Login = () => {
    return (
        <div className='flex sm:flex-col flex-row justify-between text-white' style={{ backgroundColor: '#211B34' }}>
            <div className='w-6/12 sm:w-full relative'>
                <h2 className='absolute text-white sm:ml-6 ml-12 mt-3'><Link to='/'>LOGO</Link></h2>
                <img className='w-full sm:h-auto h-full object-cover' alt = 'testing' src={require('../assets/images/texture.jpg').default}/>
            </div>   
            <div className='flex flex-col sm:px-6 sm:pt-4 sm:pb-12 p-32 space-y-6 flex-grow'>
                <div className='flex flex-col text-left space-y-3'>
                    <h2 className='font-bold text-2xl'>Log In</h2>
                    <span className="text-gray-300">Access your account</span>
                </div>
                <form onSubmit={()=> console.log('submitted')} className='space-y-6'>
                    <div className='flex flex-col space-y-1 text-left'>
                        <label className='font-semibold text-xs'>USERNAME</label>
                        <input type='text' placeholder='Enter your username'/>                        
                    </div>
                    <div className='flex flex-col space-y-1 text-left'>
                        <label className='font-semibold text-xs'>PASSWORD</label>
                        <input type='password' placeholder='Enter your password' />                        
                    </div>
                    <div className='flex-grow'>
                        <button className='w-full h-12 rounded-lg text-white' style={{ backgroundColor: '#403D50' }}>Login</button>
                    </div>
                </form>
                <div className='text-left flex flex-col space-y-3'>
                    <span>Forgot Password?</span>
                    <span>Dont't have an account? <Link to ='/signup' className='font-semibold text-gray-300'>Sign up</Link></span>
                </div>
            </div>
            <div className='hidden sm:block'>
                <Footer/>
            </div>
        </div>
    )
}

export default Login