
import { Link } from 'react-router-dom'

import CustomButton from "../components/custom-button/CustomButton.component"



const MyProfile = () => {
    return (
        <div className='flex flex-col space-y-12 px-6 py-12 h-screen'>
              <h2 className='font-bold sm:hidden text-2xl text-left text-white'>My profile</h2>
              <div className='flex justify-between bg-white rounded w-full h-full' style={{ padding: '20px'}}>
                <div className='flex flex-col space-y-6'>
                  <div style={{  backgroundColor: 'red', borderRadius: '123px', width: '120px', heihgt: '120px',}}>
                    <img alt='profile' className='rounded-full' src={'https://images.unsplash.com/photo-1518671645931-e1d946a64b17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VsZmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'}/>
                  </div>
                  <div className='text-left'>
                    <span>Name: Abdullah Ahmad</span>
                  </div>
                  <div className='text-left'>
                    <span>Email: abdulgumi77@gmail.com</span>
                  </div>
                  <div className='text-left'>
                    <span>Country: Nigeria</span>
                  </div>
                  <div className='text-left'>
                    <span>Security no: 78956895</span>
                  </div>
                </div>
                <Link to='/dashboard/settings'>
                  <CustomButton text='Edit profile'/>
                </Link>
              </div>
        </div>
    )
}

export default MyProfile