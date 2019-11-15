import React from 'react';
import {NavLink , Switch, Route} from 'react-router-dom';
import Image from '../Subrout/Image';
import Desc from '../Subrout/Desc';
import History from '../Subrout/History';

const ModelS = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Tesla Model S</h2>
            <p>пятидверный электромобиль производства американской компании Tesla. Прототип был впервые показан на Франкфуртском автосалоне в 2009 году; поставки автомобиля в США начались в июне 2012 года[1].</p>
            <ul className='menu'>
                <li>
                    <NavLink to={`${props.match.path}/`} className="menu__link">History</NavLink>
                </li>
                <li>
                    <NavLink to={`${props.match.path}/desc`} className="menu__link">Description</NavLink>
                </li>
                <li>
                    <NavLink to= {`${props.match.path}/image`} className="menu__link">Image</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${props.match.path}/`} component={History}/>
                <Route path = {`${props.match.path}/desc`} component={Desc}/>
                <Route path = {`${props.match.path}/image`} component={Image}/>
            </Switch>
        </div>
    );
};

export default ModelS;