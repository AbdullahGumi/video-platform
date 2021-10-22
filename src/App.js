import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';

// components
import NavigationBar from './components/navigation-bar/navigationBar.component'
import Footer from './components/footer/footer.component'

// pages
import Home from './pages/homepage.component'
import Videos from './pages/videos.component'
import Hoodie from './pages/hoodie.component'
import Login from './pages/login.component'
import Signup from './pages/signup.component'
import Dashboard from './pages/dashboard.component'
import customerOrders from './pages/customerOrders.component'

// redesign it later
// const PageNotFound = () => (<>You have landed on a page that doesn't exist</>)


const App = () => {
  const location = useLocation()
  return (
    <div className={`App ${location.pathname === '/signup' || location.pathname === '/login' || location.pathname.includes('/dashboard') ? '' : 'sm:mt-12'}`}>
     
      {/* hide nav bar when on login or signup page */}
      {location.pathname === '/signup'  || location.pathname === '/login' || location.pathname.includes('/dashboard') ?
        null : <NavigationBar/>
      } 
      <Switch>
        <Route  path='/dashboard' component={Dashboard}/>
        {/* <Route  path='/profile' component={Profile}/> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/videos' component={Videos} />
        <Route exact path='/orders' component={customerOrders} />
        <Route exact path='/hoodie/:id' component={Hoodie}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        {/* <Route path="*" component={PageNotFound}/>  Work on it */}
      </Switch>

      {/* hide footer when on login or signup page */}
      {location.pathname === '/signup' || location.pathname === '/login' || location.pathname.includes('dashboard') ?
        null : <Footer/>
      } 
    </div>
  );
}

export default App;
