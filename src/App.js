import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AboutUs from "./Screens/AboutUs";
import SearchBook from "./Screens/SearchBook";
import ContactForm from "./Screens/ContactForm";
import Feedback from "./Screens/Feedback";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Services from "./Screens/Services";
import NotFound from "./Screens/NotFound";
import Donation from "./Screens/Donation";
import LibraryRules from "./Screens/LibraryRules";
import Admin from "./Screens/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="row justify-content-start m-0 p-0">
          <div className="col col-2 justify-content-start m-0 p-0">
            <Sidebar />
          </div>
          <div className="col align-self-start m-0 p-0">
            <Switch>
              <Route exact path="/">
                <Redirect to="/about" />
              </Route>
              <Route path="/about" component={AboutUs} />
              <Route path="/services" component={Services} />
              <Route path="/serchbook" component={SearchBook} />
              <Route path="/donation" component={Donation} />
              <Route path="/rules" component={LibraryRules} />
              <Route path="/admin" component={Admin} />

              <Route path="/ContactUs">
                {" "}
                <ContactForm title="Contact Us" />
              </Route>
              <Route path="/feedback">
                {" "}
                <Feedback title="feedback" />
              </Route>

              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
