import React, { Component } from 'react'
import { Menu, Segment, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleLogoutClick = (e, { name }) => {

  }


  render() {
    const { activeItem } = this.state


    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item>
            <NavLink to="/">
              <Image src="/StoryJam_white.svg" size="medium"/>
            </NavLink>
          </Menu.Item>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
            <NavLink to="/">
              Home
            </NavLink>
          </Menu.Item>
          <Menu.Item name='Dashboard' active={activeItem === 'Dashboard'} onClick={this.handleItemClick}>
            <NavLink to="/jams/1">
              Dashboard
            </NavLink>
          </Menu.Item>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>
            <NavLink to='/login'>
              Log In
            </NavLink>
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.props.logout}>
              Log Out
          </Menu.Item>
          <Menu.Item name='New Jam' active={activeItem === 'New Jam'} onClick={this.handleItemClick}>
            <NavLink to='/jams/new'>
              New Jam
            </NavLink>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}
