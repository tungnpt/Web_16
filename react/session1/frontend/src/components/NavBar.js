import React, {Component} from 'react';
import SearchField from './SearchField';
import logo from '../img/logo.png';
import ProfilePanel from './ProfilePanel';

class NavBar extends Component {
  render() {
    return (
      <div  className="navbar navbar-expand">
        <div className="container">
          <SearchField onSearchChange= {this.props.onSearchChange}/>
          <div className="col-6 text-center">
            <img src={logo} alt= "Techkids logo"/>
          </div>
          <ProfilePanel/>
        </div>
      </div>
    );
  }
}

export default NavBar;
