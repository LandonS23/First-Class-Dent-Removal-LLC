import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  Sidebar,
  Segment,
  Icon,
  Menu
} from 'semantic-ui-react';

import './App.css';

import Home from './components/home/Home';
import logo from './resources/Logo.svg';

class App extends Component {
  state = { visible: false, activeItem: 'home' }

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })
  
  handleItemClick = (e, name) => {
    e.preventDefault();
    this.setState({ activeItem: name });
  }

  render() {
    const { visible, activeItem } = this.state

    return (
      <Router>
        <div>
          {/* Menu desktop */}
          <div className="menu-desktop">
            <Menu fixed='top' inverted>
              <Container>
                <Link to="/" className="home-link" onClick={e => this.handleItemClick(e, "home")}>
                  <Menu.Item className="link icon-image-link" header>
                      <Image size='mini' src={logo} className="logo" />
                  </Menu.Item>
                </Link>
                
                <Link to="/" className="home-link" onClick={e => this.handleItemClick(e, "home")}>
                  <Menu.Item className="link" header active={activeItem === 'home'}>
                      Home
                  </Menu.Item>
                </Link>

                <Menu.Item position='right' className="right-menu">
                  <a href="mailto:firstclassdentremoval@gmail.com"><Button className="contact-button">Contact Us</Button></a>
                </Menu.Item>
              </Container>
            </Menu>

            {/* Router */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={Home} />
            </Switch>
          </div>

          {/* Menu mobile */}
          <div className="menu-mobile">
            <div className="menu-bar">
              <Icon name='sidebar' onClick={this.handleButtonClick} />
              <Link to="/" className="home-link">
                <Image size='mini' src={logo} className="logo" />
                <span>First Class Dent Removal, LLC</span>
              </Link>
              <span className="fill"/>
            </div>

            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
              >

                <Link to="/" onClick={this.handleSidebarHide}><Menu.Item className="link"><Icon name='home'/>Home</Menu.Item></Link>
                <a href="mailto:firstclassdentremoval@gmail.com"><Menu.Item className="link"><Icon name='envelope outline'/>Contact</Menu.Item></a>
              </Sidebar>

              <Sidebar.Pusher dimmed={visible}>
                <Segment basic>
                  {/* Router */}
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={Home} />
                  </Switch>
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;