import React, { Component } from 'react';
import {connect} from 'react-redux';
import {plus, minus, reset} from './redux/actions/counterActions';
import './App.css';
import Form from './Form/Form';
import Gallery from './Gallery/Gallery';

class App extends Component {
  render() {
    // console.log(this.props);
    let {value, add, reload, substr} = this.props;
    return (
      <div className='container'>
        <p className="text">{value}</p>
        <button onClick={substr}>-</button>
        <button onClick={reload}>reset</button>
        <button onClick={add}>+</button>
        <Form/>
        <Gallery/>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    value: state.counter,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    add: function() {
      dispatch(plus(5))
    },
    substr: function () {
      dispatch(minus(3))
    },
    reload: function() {
      dispatch(reset())
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
