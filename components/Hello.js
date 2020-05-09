import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { updateRoot } from '../actions/noteAction.js'

class Hello extends Component {
  constructor(props){
    super(props);
     this.onUpdateRoot = onUpdateRoot.bind(this);
  }

  onUpdateRoot() {
    this.props.onUpdateRoot('B');
  }


render(){
  return(
    <div>
    <h1>Hello!{state}</h1>
    <button onClick={this.onUpdateRoot}></button>
    <h1>{this}</h1>
    </div>
  )
}
}

const mapStateToProps = state => ({
  root: state.root
})

const mapActionsToProps = {
   onUpdateRoot : updateRoot
}

export default connect(mapStateToProps,
mapActionsToProps)(Hello);
