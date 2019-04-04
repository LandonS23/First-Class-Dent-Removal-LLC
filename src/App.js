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

import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import FAQ from './components/faq/FAQ';
import Contact from './components/contact/Contact';

class App extends Component {
  state = { visible: false, activeItem: window.location.pathname.substring(1) }

  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });

  handleItemClick = (e, name) => {
    if(name !== this.state.activeItem) {
      this.setState({ activeItem: name });
    } else {
      e.preventDefault();
    }
  }

  render() {
    const { visible, activeItem } = this.state;

    return (
      <Router>
        <div>
          {/* Menu desktop */}
          <div className="menu-desktop">
            <div className="logo-thumb"/>
            <Menu fixed='top' inverted>
              <Container>
                <Link to="/" className="home-link" onClick={e => this.handleItemClick(e, "home")}>
                  <Menu.Item className="link icon-image-link" header>
                      <Image size='mini' src={logo} className="logo" />
                  </Menu.Item>
                </Link>

                <Link to="/" className="home-link" onClick={e => this.handleItemClick(e, "home")}>
                  <Menu.Item className="link" active={activeItem === '' || activeItem === 'home'}>
                    Home
                  </Menu.Item>
                </Link>

                <Link to="/about" onClick={e => this.handleItemClick(e, "about")}>
                  <Menu.Item className="link" active={activeItem === 'about'}>
                    About
                  </Menu.Item>
                </Link>

                <Link to="/gallery" onClick={e => this.handleItemClick(e, "gallery")}>
                  <Menu.Item className="link" active={activeItem === 'gallery'}>
                    Gallery
                  </Menu.Item>
                </Link>

                <Link to="/faq" onClick={e => this.handleItemClick(e, "faq")}>
                  <Menu.Item className="link" active={activeItem === 'faq'}>
                    FAQ
                  </Menu.Item>
                </Link>

                <a href="https://www.facebook.com/pg/firstclassdentremovalllc/reviews/?ref=page_internal" target="_blank" rel="noopener noreferrer">
                  <Menu.Item className="link">
                      Testimonials
                  </Menu.Item>
                </a>

                <Menu.Item position='right' className="right-menu" active={activeItem === 'contact'}>
                  <Link to="/contact" onClick={e => this.handleItemClick(e, "contact")}>
                    <Button className="contact-button">Contact Us</Button>
                  </Link>
                </Menu.Item>
              </Container>
            </Menu>

            {/* Router */}
            <Switch>
              <Route exact path="/" render={()=><Home handleItemClick={this.handleItemClick}/>} />
              <Route path="/about" component={About} />
              <Route path="/gallery" component={Gallery} handleItemClick={this.handleItemClick}/>} />
              <Route path="/faq" component={FAQ} handleItemClick={this.handleItemClick}/>} />
              <Route path="/contact" component={Contact} />
              <Route render={()=><Home handleItemClick={this.handleItemClick}/>} />
            </Switch>
          </div>

          {/* Menu mobile */}
          <div className="menu-mobile">
            <div className="menu-bar">
              <Icon name='sidebar' disabled={visible} onClick={this.handleButtonClick} />
              <Link to="/" onClick={(e) => { this.handleSidebarHide(); this.handleItemClick(e, "home"); }} className="home-link">
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
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
              >

                <Link to="/" onClick={(e) => { this.handleSidebarHide(); this.handleItemClick(e, "home"); }}>
                  <Menu.Item className="link" active={activeItem === '' || activeItem === 'home'}>
                    <Icon name='home'/>
                    Home
                  </Menu.Item>
                </Link>
                <Link to="/about" onClick={(e) => { this.handleSidebarHide(); this.handleItemClick(e, "about"); }}>
                  <Menu.Item className="link" active={activeItem === 'about'}>
                    <Icon name='info'/>
                    About
                  </Menu.Item>
                </Link>
                <Link to="/contact" onClick={(e) => { this.handleSidebarHide(); this.handleItemClick(e, "contact"); }}>
                  <Menu.Item className="link" active={activeItem === 'contact'}>
                    <Icon name='mail'/>
                    Contact
                  </Menu.Item>
                </Link>
                <Link to="/gallery" onClick={(e) => { this.handleSidebarHide(); this.handleItemClick(e, "gallery"); }}>
                  <Menu.Item className="link" active={activeItem === 'gallery'}>
                    <Icon name='camera'/>
                    Gallery
                  </Menu.Item>
                </Link>
                <Link to="/faq" onClick={(e) => { this.handleSidebarHide(); this.handleItemClick(e, "faq"); }}>
                  <Menu.Item className="link" active={activeItem === 'faq'}>
                    <Icon name='question'/>
                    FAQ
                  </Menu.Item>
                </Link>
                <a href="https://www.facebook.com/pg/firstclassdentremovalllc/reviews/?ref=page_internal" target="_blank" rel="noopener noreferrer">
                  <Menu.Item className="link">
                    <Icon name='pencil'/>
                    Testimonials
                  </Menu.Item>
                </a>
              </Sidebar>

              <Sidebar.Pusher dimmed={visible}>
                <Segment basic>
                  {/* Router */}
                  <Switch>
                    <Route exact path="/" render={()=><Home handleItemClick={this.handleItemClick}/>} />
                    <Route path="/about" component={About} />
                    <Route path="/gallery" component={Gallery} handleItemClick={this.handleItemClick}/>} />
                    <Route path="/faq" component={FAQ} handleItemClick={this.handleItemClick}/>} />
                    <Route path="/contact" component={Contact} />
                    <Route render={()=><Home handleItemClick={this.handleItemClick}/>} />
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
