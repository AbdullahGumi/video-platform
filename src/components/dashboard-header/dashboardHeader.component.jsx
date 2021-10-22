import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CustomButton from '../custom-button/CustomButton.component'

import './dashboardHeader.styles.css'

const DashboardHeader = ({ headerText }) => {
    const { pathname } = useLocation()
    const admin = useSelector(state => state.user.admin)

    // code to get the first letters of both first and last name and then captailize them.
    const fullName = admin.name.split(' ')
    const initials = (fullName.shift().charAt(0) + fullName.pop().charAt(0)).toUpperCase()

    return (
        <Menu as="div" className="z-40 inline-block text-left">
            <div style={{ backgroundColor: '#211B34' }} className={`flex flex-row w-full sm:shadow-none sm:bg-transparent ${pathname === '/admin/settings' && 'sm:bg-white sm:py-12'} sm:h-0 sm:pt-12 sm:justify-between h-20 items-center justify-end  px-6 bg-white shadow-sm`} >
                <div className='hidden sm:flex'>
                    <span className='font-bold text-2xl'>{ headerText }</span>
                </div>
                <div className='flex flex-row space-x-6 items-center '>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 20C9.1 20 10 19.1 10 18H6C6 19.1 6.89 20 8 20ZM14 14V9C14 5.93 12.36 3.36 9.5 2.68V2C9.5 1.17 8.83 0.5 8 0.5C7.17 0.5 6.5 1.17 6.5 2V2.68C3.63 3.36 2 5.92 2 9V14L0 16V17H16V16L14 14Z" fill="#FFF"/>
                    </svg>

                    <svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="15.5" x2="0.499999" y2="0.5" stroke="#C7C8D1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Menu.Button>
                        <div 
                        className='flex items-center justify-center font-bold text-white' 
                        style={{ fontSize: '20px', width: '48px', height: '48px', backgroundColor: '#403D50', borderRadius: '8px' }}
                        >
                            <span>{initials}</span>
                        </div>
                    </Menu.Button>
                </div>
            </div>
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
                        className="absolute space-y-6 right-0 w-56 mt-2 origin-top-right bg-white  rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        style={{ padding: '16px 8px', width: '241px', height: '188px' }}
                    >  
                        <Menu.Item>
                        {({ active }) => (
                            <div className='flex flex-row space-x-3 items-center'>
                                <div style={{ backgroundColor: '#46AC48', padding: '4px', borderRadius: '124px' }}>
                                    <CustomButton className='cursor-default' text='AG' width='32px' height='32px' />
                                </div>
                                <div className='flex flex-col'>
                                    <span style={{ fontSize: '14px' }}>Abdullah Ahmad</span>
                                    <span style={{ fontSize: '12px', color: '#73758C' }}>abdulgumi77@gmail.com</span>
                                </div>
                            </div>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                           <Link className='admin-header-menu flex space-x-3  justiyf-start items-center' to='/admin/settings'>
                                <div style={{ padding: '4px', paddingLeft: '15px' }}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.1401 10.9399C17.1801 10.6399 17.2001 10.3299 17.2001 9.9999C17.2001 9.6799 17.1801 9.3599 17.1301 9.0599L19.1601 7.4799C19.3401 7.3399 19.3901 7.0699 19.2801 6.8699L17.3601 3.5499C17.2401 3.3299 16.9901 3.2599 16.7701 3.3299L14.3801 4.2899C13.8801 3.9099 13.3501 3.5899 12.7601 3.3499L12.4001 0.809902C12.3601 0.569902 12.1601 0.399902 11.9201 0.399902H8.08011C7.84011 0.399902 7.65011 0.569902 7.61011 0.809902L7.25011 3.3499C6.66011 3.5899 6.12011 3.9199 5.63011 4.2899L3.24011 3.3299C3.02011 3.2499 2.77011 3.3299 2.65011 3.5499L0.74011 6.8699C0.62011 7.0799 0.66011 7.3399 0.86011 7.4799L2.89011 9.0599C2.84011 9.3599 2.80011 9.6899 2.80011 9.9999C2.80011 10.3099 2.82011 10.6399 2.87011 10.9399L0.84011 12.5199C0.66011 12.6599 0.61011 12.9299 0.72011 13.1299L2.64011 16.4499C2.76011 16.6699 3.01011 16.7399 3.23011 16.6699L5.62011 15.7099C6.12011 16.0899 6.65011 16.4099 7.24011 16.6499L7.60011 19.1899C7.65011 19.4299 7.84011 19.5999 8.08011 19.5999H11.9201C12.1601 19.5999 12.3601 19.4299 12.3901 19.1899L12.7501 16.6499C13.3401 16.4099 13.8801 16.0899 14.3701 15.7099L16.7601 16.6699C16.9801 16.7499 17.2301 16.6699 17.3501 16.4499L19.2701 13.1299C19.3901 12.9099 19.3401 12.6599 19.1501 12.5199L17.1401 10.9399ZM10.0001 13.5999C8.02011 13.5999 6.40011 11.9799 6.40011 9.9999C6.40011 8.0199 8.02011 6.3999 10.0001 6.3999C11.9801 6.3999 13.6001 8.0199 13.6001 9.9999C13.6001 11.9799 11.9801 13.5999 10.0001 13.5999Z" fill="#73758C"/>
                                    </svg>
                                </div>
                                <span>Settings</span>
                            </Link>
                        )}
                        </Menu.Item>
                        <div className='admin-header-menu flex space-x-3  justiyf-between items-center'>
                                <div style={{ padding: '4px', paddingLeft: '15px' }}>
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z" fill="#73758C"/>
                                </svg>
                                </div>
                                <span>Logout</span>
                            </div>
                    </Menu.Items>
                </div>
            </Transition>
        </Menu>
    )
}

export default DashboardHeader
