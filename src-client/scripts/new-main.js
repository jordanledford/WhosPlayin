import React from 'react'
import ReactDOM from 'react-dom'


const STORE = require('./store.js')
const ACTIONS = require('./actions.js')



// componentDidMount() {
//     var element = ReactDOM.findDOWNode(this.refs.dropdown)
//     let(element).ready(function(){
//       let('select').material_select();
//     });
// }


const MainView = React.createClass({
  componentWillMount: function() {
    console.log("prop dawgs", this.props);
   //  if(!this.props.currentUser.city){
   //    return(
   //      <p>loadddinnn</p>
   //    )

    // let eventsListNames = performance[0]
    // console.log(eventsListNames);
  },

  _logoutHandler: function(){
    ACTIONS._signOutUser()
  },

  componentWillReceiveProps: function(newProps){
    console.log('new props',newProps)
    if(newProps.currentUser.city !== this.props.currentUser.city){
      ACTIONS._fetchBandsandTrackData(newProps.currentUser.city)
    }
  },

  _changeLocationSubmitHandler: function(){
     evt.preventDefault()

     let userNewLocationObj = {
        city: evt.target.city.value,
     }

     ACTIONS._changeUserLocation(userNewLocationObj)
  },

  render: function(){
    if(!this.props.currentArtist){
      return(
        <p>loadddinnn</p>
      )
    }
    return (
      <div className="wrapper">
        <div className="hero">
          <div className="input-field">
          </div>
          <nav>
            <div className="nav-wrapper">
               <form className="row change-location left" onSubmit={this._changeLocationSubmitHandler}>
                  <input className="col-sm-6" type="text" value="Location" name="city"></input>
                  <button type="submit" className="col-sm-6 center location-btn btn waves-effect waves-light">Change Location</button>
               </form>
              <a href="#!" className="brand-logo center">whosplayin</a>
              <ul className="right hide-on-med-and-down">


                <li><a>Hello {this.props.currentUser.firstName}</a></li>
                <li><a href="#ok">Home</a></li>

                <li><a href="#ok">{this.props.currentUser.city}</a></li>
                <li><a href="/#" onClick={this._logoutHandler}>Logout</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="row">
          <CardView currentArtist={this.props.currentArtist} />
        </div>
      </div>
    );
  }
});



// let musicShitString = ''
// console.log(musicShitString);
 // console.log(this.props.currentArtist)


const CardView = React.createClass({


  render: function(){

    return (
        <div className="col xs12 s12 m4 lg3">
          <div className="card z-depth-4">
            <div className="card-content black-text">
              <div className="card-image">
                <img src="https://unsplash.it/310/310/?random"></img>
              </div>
              <span className="card-title">{this.props.bandname}</span>
              <h6>{this.props.artistname}</h6>
              <h6>{this.props.datetime}</h6>
            </div>
            <div className="cta">

              <iframe src={this.props.currentArtist} frameBorder="0" allowTransparency="true"></iframe>
              <script type='text/javascript' src='http://widget.bandsintown.com/javascripts/bit_widget.js'></script>
              <a href="http://www.bandsintown.com/" className="bit-widget-initializer bandsintown" data-artist="Small Black">Upcoming Tour Dates</a>
            </div>
          </div>
        </div>
    );
  }
});
module.exports = MainView, CardView
