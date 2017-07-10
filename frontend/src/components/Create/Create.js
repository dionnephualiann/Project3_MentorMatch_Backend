// import React, { Component } from 'react';
// import axios from 'axios';
//
//
// /**
//  * Create
//  */
// export class Create extends Component { // eslint-disable-line react/prefer-stateless-function
//   constructor(props){
//     super(props);
//
//     this.state = {
//       car: null
//     }
//   }
//
//   componentWillReceiveProps(nextProps) {
//
//     axios.get('/api/'+ nextProps.car)
//       .then( (response) => {
//         console.log("ActiveCar: ",response);
//         this.setState({
//           car: response.data
//         })
//       })
//       .catch((error)=> {
//         console.log(error);
//       });
//   }
//
//   onChange = (e) => {
//
//     let car = this.state.car || {};
//     const key = e.target.id;
//     const value = e.target.value;
//     car[key] = value;
//
//     this.setState({
//       car: car
//     });
//   }
//
//   addNewCar = (e) => {
//     console.log('addNewCar');
//
//     axios.post('/api', this.state.car)
//       .then( (response) => {
//         this.setState({
//           car: response.data
//         })
//       })
//       .catch((error)=> {
//         console.log(error);
//       });
//   }
//
//   updateCar = (e) => {
//     console.log('updateCar');
//
//     axios.put('/api/'+ this.state.car._id, {car: this.state.car})
//       .then( (response) => {
//         this.setState({
//           car: response.data
//         })
//       })
//       .catch((error)=> {
//         console.log(error);
//       });
//   }
//
//   deleteCar = (e) => {
//     console.log('deleteCar');
//
//     axios.delete('/api/'+ this.state.car._id)
//       .then( (response) => {
//         this.setState({
//           car: null
//         })
//       })
//       .catch((error)=> {
//         console.log(error);
//       });
//   }
//
//   logout = () =>{
//     axios.get('/auth/logout')
//       .then( (response) => {
//         console.log("AJAX: Logged out @ '/auth/logout'");
//         window.location.href = "/";
//       })
//       .catch((error)=> {
//         console.log(error);
//       });
//
//
//   }
//
//
//   render() {
//     return (
//       <div className="row">
//
//       <div className="col-md-12">
//         <h1>Edit car </h1>
//       </div>
//
//       <form className="col-md-6 col-md-offset-1">
//         <div>
//           <button type="button"
//                   className="btn btn-success pull-left"
//                   onClick={ this.addNewCar }>Add new car</button>
//           <button type="button"
//                   className="btn btn-danger pull-right"
//                   onClick={ this.logout }>Logout</button>
//         </div>
//         <div className="clearfix"></div>
//         <div className="form-group">
//           <label htmlFor="manufacturer">Manufacturer</label>
//           <input type="text"
//                  className="form-control"
//                  id="manufacturer"
//                  placeholder="Manufacturer"
//                  onChange={this.onChange}
//                  value={ this.state.car && this.state.car.manufacturer ? this.state.car.manufacturer : ""}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="model">Model</label>
//           <input type="text"
//                  className="form-control"
//                  id="model"
//                  placeholder="Model"
//                  onChange={this.onChange}
//                  value={ this.state.car && this.state.car.model ? this.state.car.model : ""}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="year">Year</label>
//           <input type="number"
//                  className="form-control"
//                  id="year"
//                  placeholder="Year"
//                  onChange={this.onChange}
//                  value={ this.state.car && this.state.car.year ? this.state.car.year : ""}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="color">Color</label>
//           <input type="text"
//                  className="form-control"
//                  id="color"
//                  placeholder="Color"
//                  onChange={this.onChange}
//                  value={ this.state.car && this.state.car.color ? this.state.car.color : ""}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="kms">KMS</label>
//           <input type="number"
//                  className="form-control"
//                  id="kms"
//                  placeholder="KMS"
//                  onChange={this.onChange}
//                  value={ this.state.car && this.state.car.kms ? this.state.car.kms : ""}/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Price</label>
//           <input type="number"
//                  className="form-control"
//                  id="price"
//                  placeholder="Price"
//                  onChange={this.onChange}
//                  value={ this.state.car && this.state.car.price ? this.state.car.price : ""}/>
//         </div>
//
//         <button type="button"
//                 className="btn btn-primary pull-left"
//                 onClick={ this.updateCar }>Update</button>
//         <button type="button"
//                 className="btn btn-danger pull-right"
//                 onClick={ this.deleteCar }>Delete</button>
//       </form>
//
//
//
//       </div>
//     );
//   }
// }
//
// export default Create;
