import React, { Component } from 'react';
import { connect } from 'react-redux';

import CarList from './components/CarList/CarList';
import Create from './components/Create/Create';
import Login from './components/Login/Login';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeCar: ""
    }
  }


  setActiveCar = (id) => {

    console.log("Active car: ", id);

    this.setState({
      activeCar: id
    })
  }

  render() {
    const isLoggedIn = this.props.user._id;

    return (
      <div className="App container-fluid">
        <div className="row">
          {isLoggedIn ? (
            <div className="isLoggedIn">
              <div className="col-md-2" id="CarList">
                <CarList setActiveCar={ this.setActiveCar } activeCar= {this.state.activeCar}/>
              </div>
              <div className="col-md-10" id="CarEdit">
                <Create car={this.state.activeCar}/>
              </div>
            </div>
          ) : (
            <div className="col-md-4 col-md-offset-4" id="Login">
              <Login/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
