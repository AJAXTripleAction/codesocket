import React, { PropTypes } from 'react'
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router'
import { connect } from 'react-redux'
import NavContainer from '../nav/container'
import SideNav from '../sidenav/container'
import HomePresentation from './presentation.js';

export class HomeContainer extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomePresentation user={this.props.userName} children= {this.props.children}/>
      </div>
      )
  }
}

function mapStateToProps(state){
  return {
    userName: state.userReducer.userName,
    room: state.sessionReducer.room,
    socket: state.sessionReducer.socket,
    modalopen: state.sessionReducer.modalopen,
    doclist: state.groupReducer.doclist
  }
}

export default connect(mapStateToProps)(HomeContainer)
