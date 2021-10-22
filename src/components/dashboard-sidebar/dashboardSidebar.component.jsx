import { NavLink, useLocation, Link } from 'react-router-dom'

// import CustomButton from '../custom-button/CustomButton.component'

import './dashboardSidebar.styles.css'

const DashboardSidebar = () => {
    const location = useLocation()

    return (
        <div  className='flex sm:hidden flex-col top-0 left-0 h-5/6 space-y-6 px-4 py-6 shadow-sm rounded-br-lg rounded-bl-lg h-full bg-white' style={{ width: '260px', backgroundColor: '#211B34'}}>
            <Link to='/'>
                <h2 className='mb-6 text-2xl text-left text-white'>LOGO</h2>
            </Link>
            <ul className='space-y-8 mt-12' style={{ marginTop: '50px', }}>
                <li>
                    <NavLink className='nav_link flex flex-row pl-10 py-2 rounded-lg items-center space-x-3' activeStyle={{fontWeight: '500', color: '#FFF' ,backgroundColor: "#403D50"}} to='/dashboard/my_videos' isActive={(match, location)=> location.pathname === '/dashboard/my_videos'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" fill='white'/>
                        </svg>
                        <span className='text-white'>My videos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav_link flex flex-row pl-10 py-2 rounded-lg items-center space-x-3' activeStyle={{fontWeight: '500', color: '#FFF' ,backgroundColor: "#403D50"}} to='/dashboard/channels'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 9.39999L7.5 4.20999" stroke='white' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 16V7.99999C20.9996 7.64927 20.9071 7.3048 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.3048 3.00036 7.64927 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke='white' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke='white' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22.08V12" stroke='white' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className='text-white'>Channels</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav_link flex flex-row pl-10 py-2 rounded-lg items-center space-x-3' activeStyle={{fontWeight: '500', color: '#FFF' ,backgroundColor: "#403D50"}} to='/dashboard/history'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11 14H4V12H11V14ZM14 10H4V8H14V10ZM14 6H4V4H14V6Z" fill='white'/>
                        </svg>
                        <span className='text-white'>Watch history</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='nav_link flex flex-row pl-10 py-2 rounded-lg items-center space-x-3' activeStyle={{fontWeight: '500', color: '#FFF' ,backgroundColor: "#403D50"}} to='/dashboard/my_profile' isActive={(match, location)=> location.pathname === '/dashboard/settings'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill='white'/>
                        </svg>
                        <span className='text-white'>My profile</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default DashboardSidebar