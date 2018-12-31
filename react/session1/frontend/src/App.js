import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from './axios'
import NavBar from './components/NavBar';
import MainContent from "./components/MainContent";

class App extends Component {
  state = {
    images: [],
    displayedImages: [],
    searchString: "s"
  }

  componentDidMount(){
    axios
    .get("/api/images")
    .then(data => {
      console.log(data.data);
      setTimeout(() => {
        this.setState({images: data.data,
        });
      }, 1000);
    })
    .catch(err => console.error(err));
  }

  _onSearchChange = text => this.setState({searchString: text});

  render() {
    const displayedImages = this.state.images.filter(img => img.title.includes(this.state.searchString) || img.description.includes(this.state.searchString))
    return (
      <div className="App">
        <NavBar onSearchChange = {this._onSearchChange}/>
        <MainContent images = {displayedImages}/>
      </div>
    );
  }
}

export default App;
