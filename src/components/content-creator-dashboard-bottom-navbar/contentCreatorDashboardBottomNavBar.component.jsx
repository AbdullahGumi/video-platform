import { NavLink, useLocation } from 'react-router-dom'


const ContentCreatorDashboardBottomNavBar = () => {
    const location = useLocation()


    // only visible in mobile view 
    return (
        <div className='hidden z-10 fixed sm:flex flex-row justify-center px-1 bottom-0 bg-white w-full' style={{ height: '72px' }}>
            <ul className='flex flex-row justify-around w-full space-x-6 items-center'>
                <li>
                    <NavLink className='flex space-y-1 justify-center flex-col items-center ' activeStyle={{fontWeight: '600', color: '#46AC48'}} to='/dashboard/dashboard'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 5V7H15V5H19ZM9 5V11H5V5H9ZM19 13V19H15V13H19ZM9 17V19H5V17H9ZM21 3H13V9H21V3ZM11 3H3V13H11V3ZM21 11H13V21H21V11ZM11 15H3V21H11V15Z" fill={`${location.pathname === '/dashboard/dashboard' ? '#46AC48' : '#73758c'}`}/>
                        </svg>
                        <span className='text-xs' style={{ color: `${location.pathname === '/dashboard/dashboard' ? '#46AC48' : '#73758c'}`}}>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex space-y-1 justify-center flex-col items-center ' activeStyle={{fontWeight: '600', color: '#46AC48'}} to='/dashboard/products'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 9.39999L7.5 4.20999" stroke={`${location.pathname === '/dashboard/products' ? '#46AC48' : '#73758c'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21 16V7.99999C20.9996 7.64927 20.9071 7.3048 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.3048 3.00036 7.64927 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke={`${location.pathname === '/dashboard/products' ? '#46AC48' : '#73758c'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke={`${location.pathname === '/dashboard/products' ? '#46AC48' : '#73758c'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22.08V12" stroke={`${location.pathname === '/dashboard/products' ? '#46AC48' : '#73758c'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className='text-xs' style={{ color: `${location.pathname === '/dashboard/products' ? '#46AC48' : '#73758c'}`}}>Products</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex space-y-1  flex-col items-center ' activeStyle={{fontWeight: '600', color: '#46AC48'}} to='/dashboard/orders'>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0ZM11 14H4V12H11V14ZM14 10H4V8H14V10ZM14 6H4V4H14V6Z" fill={`${location.pathname === '/dashboard/orders' ? '#46AC48' : '#73758c'}`}/>
                        </svg>
                        <span className='text-xs' style={{ color: `${location.pathname === '/dashboard/orders' ? '#46AC48' : '#73758c'}`}}>Orders</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex space-y-1 justify-center flex-col items-center ' activeStyle={{fontWeight: '600', color: '#46AC48'}} to='/dashboard/customers'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill={`${location.pathname === '/dashboard/customers' ? '#46AC48' : '#73758c'}`}/>
                        </svg>
                        <span className='text-xs' style={{ color: `${location.pathname === '/dashboard/customers' ? '#46AC48' : '#73758c'}`}}>Customers</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex space-y-1 justify-center flex-col items-center ' activeStyle={{fontWeight: '600', color: '#46AC48'}} to='/dashboard/settings'>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.74 10.94C16.78 10.64 16.8 10.33 16.8 10C16.8 9.68003 16.78 9.36002 16.73 9.06002L18.76 7.48002C18.94 7.34002 18.99 7.07002 18.88 6.87002L16.96 3.55002C16.84 3.33002 16.59 3.26002 16.37 3.33002L13.98 4.29002C13.48 3.91002 12.95 3.59002 12.36 3.35002L12 0.810024C11.96 0.570024 11.76 0.400024 11.52 0.400024H7.68002C7.44002 0.400024 7.25002 0.570024 7.21002 0.810024L6.85002 3.35002C6.26002 3.59002 5.72002 3.92002 5.23002 4.29002L2.84002 3.33002C2.62002 3.25002 2.37002 3.33002 2.25002 3.55002L0.340024 6.87002C0.220024 7.08002 0.260024 7.34002 0.460024 7.48002L2.49002 9.06002C2.44002 9.36002 2.40002 9.69002 2.40002 10C2.40002 10.31 2.42002 10.64 2.47002 10.94L0.440024 12.52C0.260024 12.66 0.210024 12.93 0.320024 13.13L2.24002 16.45C2.36002 16.67 2.61002 16.74 2.83002 16.67L5.22002 15.71C5.72002 16.09 6.25002 16.41 6.84002 16.65L7.20002 19.19C7.25002 19.43 7.44002 19.6 7.68002 19.6H11.52C11.76 19.6 11.96 19.43 11.99 19.19L12.35 16.65C12.94 16.41 13.48 16.09 13.97 15.71L16.36 16.67C16.58 16.75 16.83 16.67 16.95 16.45L18.87 13.13C18.99 12.91 18.94 12.66 18.75 12.52L16.74 10.94ZM9.60002 13.6C7.62002 13.6 6.00002 11.98 6.00002 10C6.00002 8.02002 7.62002 6.40002 9.60002 6.40002C11.58 6.40002 13.2 8.02002 13.2 10C13.2 11.98 11.58 13.6 9.60002 13.6Z" fill={`${location.pathname === '/dashboard/settings' ? '#46AC48' : '#73758c'}`} fillOpacity="0.5"/>
                    </svg>
                        <span className='text-xs' style={{ color: `${location.pathname === '/dashboard/settings' ? '#46AC48' : '#73758c'}`}}>Settings</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ContentCreatorDashboardBottomNavBar