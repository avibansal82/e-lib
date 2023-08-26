import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AboutUs from './Screens/AboutUs';
import ContactUs from './Screens/ContactUs';
import ContactForm from './Screens/ContactForm';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Services from './Screens/Services';
import NotFound from './Screens/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className="row justify-content-start m-0 p-0">
          <div className="col col-2 justify-content-start m-0 p-0">
            <Sidebar/>
          </div>
          <div className="col align-self-start m-0 p-0">
            <Switch>
              <Route path="/about" component = {AboutUs} />
              <Route path="/services" component={Services} />
              <Route path="/ContactUs"> <ContactForm title="Contact Us"/></Route>
             <Route component={NotFound}/>
            </Switch>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
