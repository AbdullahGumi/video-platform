import { Switch , Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import DashboardHeader from '../components/dashboard-header/dashboardHeader.component'
import DashboardSidebar from '../components/dashboard-sidebar/dashboardSidebar.component'
import DashboardBottomNavBar from '../components/dashboard-bottom-navbar/dashboardBottomNavBar.component'

import MyVideos from './myVideos.component'
import Settings from './settings.component'
import History from './history.component.jsx'
import MyProfile from './myProfile.component.jsx'
import Channels from './channels.component.jsx'
import Player from './player.component'


const Dashboard = () => {
    const { pathname } = useLocation()
    const admin = useSelector(state => state.user.admin)

    const headerText = pathname === '/dashboard/my_videos' ? (`Hi, ${admin.name.split(' ').slice(0, 1).join(' ')}!`) 
                     : pathname === '/dashboard/channels' ? ('Channels') 
                     : pathname === '/dashboard/history' ? ('History') 
                     : pathname === '/dashboard/customers' ? ('My Profile') 
                     : pathname === '/dashboard/settings' ? ('Settings') 
                     : null 

    return (
        <div className='flex flex-row' style={{ backgroundColor: '#2b273f' }}>
            <div className=''>
                <DashboardSidebar/>
            </div>
            <div className='flex flex-col w-full'>
                <DashboardHeader headerText={headerText} />
                <Switch>
                    <Route exact path='/dashboard/my_videos' component={MyVideos}/>
                    <Route exact path='/dashboard/history' component={History}/>
                    <Route exact path='/dashboard/channels' component={Channels}/>
                    <Route exact path='/dashboard/my_profile' component={MyProfile}/>
                    <Route exact path='/dashboard/settings' component={Settings}/>
                    <Route exact path='/dashboard/my_videos/player/:id' component={Player}/>
                    
                </Switch>
                {/* only visible in mobile view */}
                <DashboardBottomNavBar/>
            </div>    
        </div>
    )
}

export default Dashboard