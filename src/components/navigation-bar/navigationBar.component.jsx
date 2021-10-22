import { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Link, useLocation }  from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'

import HamburgerSVG from '../svg/hamburgerSVG.component'
import CloseSVG from '../svg/closeSVG.component'
import CustomButton from '../custom-button/CustomButton.component'

import { setAdminUser } from '../../redux/user/userActions'


const NavigationBar = () => {
    const location = useLocation()

    const [isNavOpen, setNavOpen] = useState(false)
    const admin = useSelector(state => state.user.admin)
    const dispatch = useDispatch()


    const toggleNav = () => {
        setNavOpen(!isNavOpen)
    }

    return (
        <>
            <nav className="sticky top-0 z-40 bg-white sm:px-0 sm:py-0 px-1.5 py-6 text-white" style={{ backgroundColor: '#211B34' }}>
                
                {/* desktop view */}
                <div className="sm:hidden sm:pt-24 flex flex-row justify-between px-24 items-center ">
                    <div>
                        <Link to='/'>
                            <h1  style={{ fontSize: '24px' }} >LOGO</h1>
                        </Link>
                    </div>
                    <div className='flex flex-row justify-between items-center space-x-6'>
                        <div>
                            <ul className='flex flex-row justify-between space-x-12'>
                                <li><NavLink activeStyle={{fontWeight: 'bold', color: "#CBC3E3"}} exact to='/videos'>Videos</NavLink></li>
                                <li><NavLink activeStyle={{fontWeight: 'bold', color: "#CBC3E3"}} exact to={`${admin ? '/dashboard/my_videos' : '/orders'}`}>{Object.keys(admin).length ? 'Content creator' : null}</NavLink></li>
                            </ul>
                        </div>
                        {Object.keys(admin).length ? (
                            <div className='flex flex-row items-center space-x-3'>
                                <img width='32px' height='32px' src={admin.profileImage} alt='profile' className='object-cover' style={{ borderRadius: '50%', maxWidth: '32px', maxHeight: '32px'}} />
                                <span>{admin.name}</span>
                                <Menu as="div" className="flex items-center">
                                    <Menu.Button className='self-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                    <div className='relative'>
                                        <Menu.Items 
                                            className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                            style={{ padding: '16px 8px' }}
                                        >  
                                            <Menu.Item >
                                            {({ active }) => (
                                                <Link className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`} to="/dashboard/">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" fill={`${location.pathname === '/admin/dashboard' || location.pathname === '/admin/settings' ? 'white' : 'black'}`}/>
                                                    </svg>
                                                    <span className='text-black'>Dashboard</span>
                                                </Link>
                                            )}
                                            </Menu.Item>
                                            <Menu.Item onClick={()=> dispatch(setAdminUser({}))}>
                                            {({ active }) => (
                                            <div className={`flex space-x-3 cursor-pointer group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z" fill="#FE2712"/>
                                                </svg>
                                                <span className='text-black'>Logout</span>
                                            </div>
                                            )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </div>
                                    </Transition>
                                </Menu>
                            </div>
                        ) : (
                            <div className='flex items-center space-x-6'>
                                <Link to='/login' className='font-semibold'>Login</Link>
                                <Link to='/signup'>
                                        <CustomButton 
                                            text={'Sign Up'}
                                            width={'144px'}
                                            height={'48px'}/>
                                </Link>
                            </div>
                        )

                        }
                        
                    </div>
                </div>

                {/* mobile view */}
                <div className='hidden sm:flex flex-col fixed top-0 w-full space-y-20' style={{ height: `${isNavOpen ? '896px' : ''}` , backgroundColor: `${isNavOpen ? '#F4FBF4' : '#FFF'}`, paddingTop: '20px'}}>
                    <div className=' flex items-center px-6 justify-between '>
                        <div>
                            <Link 
                                to='/'
                                onClick={()=> toggleNav()}
                                >
                                <h1  style={{ fontSize: '24px' }} >LOGO</h1>
                            </Link>
                        </div>
                        <div className='flex space-x-8'>
                            <CustomButton handleClick={()=>  toggleNav()} width='20px' height='21px' backgroundColor='transparent' icon={!isNavOpen ? <HamburgerSVG/> : <CloseSVG/>}/>
                        </div>
                    </div>
                    { isNavOpen ? 
                        (
                            <div className='space-y-12'>
                                <ul className='flex flex-col justify-between items-start px-6 space-y-12'>
                                    <li onClick={()=> toggleNav()}><NavLink exact to='/hoodies'>Hoodies</NavLink></li>
                                    <li onClick={()=> toggleNav()}><NavLink exact to='/'>Zip-Up Hoodies</NavLink></li>
                                    <li onClick={()=> toggleNav()}><NavLink exact to='/'>T-Shirts</NavLink></li>
                                    <li onClick={()=> toggleNav()}><NavLink exact to={`${admin ? '/admin/dashboard' : '/orders'}`}>{Object.keys(admin).length ? 'Admin' : 'Orders'}</NavLink></li>
                                </ul>
                                <div className='flex flex-col space-y-6 px-6'>
                                    <Link to='/signup'>
                                            <CustomButton 
                                                text={'Sign Up'}
                                                width={'100%'}
                                                height={'48px'}/>
                                    </Link>
                                    <Link to='/login' className='font-semibold'>Login</Link>
                                </div>
                            </div>
                        ) : (null)
                    }
                    
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;