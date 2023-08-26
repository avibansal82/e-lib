import React from "react";
import { Switch, Route, useRouteMatch } from "react-router";
import History from "./History";
import Location from "./Location";
import BookReturn from "./BookReturn";
import Charges from "./Charges";
import { NavLink } from "react-router-dom";
function AboutUs() {
    const { path, url } = useRouteMatch();
     return (<>
        <div className="container-fluid p-0">
            <div className="navbar justify-content-start p-0">
                <ul className="nav nav-tabs ">
                    <li className="nav-item">
                        <NavLink  to={`${url}/location`} activeClassName="active" className="nav-link" >Location & Hours</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/book-Return`} activeClassName="active" className="nav-link" >Book Returns</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${url}/charges`} activeClassName="active" className="nav-link" >Charges</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  to={`${url}/history`} activeClassName="active" className="nav-link"  >History</NavLink>
                    </li>
                </ul>
            </div>
            <hr className="m-0"/>
        </div>
        <Switch>
            <Route exact path={`${path}/history`} component={History} />
            <Route path={`${path}/location`} component={Location} />
            <Route path={`${path}/book-Return`} component={BookReturn} />
            
            <Route path={`${path}/charges`} component={Charges} />
        </Switch>
    </>);
}
export default AboutUs;