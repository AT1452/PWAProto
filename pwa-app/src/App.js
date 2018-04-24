// App.js

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './Components/MaterialTitlePanel';
import MediaQuery from 'react-responsive';
import ContentFlex from './Components/ContentFlex';
import Button from 'material-ui/Button';

var responsiveWidth = 0;

if(window.outerWidth < 992){
    responsiveWidth = window.outerWidth * 0.45;
}
else if(window.outerWidth >= 992){
    responsiveWidth = window.outerWidth * 0.35;
}


const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'black',
    },
    content: {
        paddingTop: 10,
        backgroundColor: 'white',
        width: responsiveWidth,
        height : window.outerHeight
    },
    navbarButton: {
        height : 60,
    },

};

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            sidebarOpen : false,
            docked: false,
            open: false,
            transitions: true,
            touch: true,
            shadow: true,
            pullRight: false,
            touchHandleWidth: 20,
            dragToggleDistance: 30,
        };

        //this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.menuButtonClick = this.menuButtonClick.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);


    }

    /**onSetSidebarOpen(open){
        this.setState({sidebarOpen : open})
    }**/

    onSetOpen(open) {
        this.setState({open: open});
    }


    menuButtonClick(ev) {
        ev.preventDefault();
        this.onSetOpen(!this.state.open);
    }





    render() {

        var sideBarContent  = (
            <MaterialTitlePanel title = "Welcome!">
                <div style={styles.content}>
                    {/*
                    <p>React Sidebar is a sidebar component for React. It offers the following features:</p>
                    <ul>
                        <li>Have the sidebar slide over main content</li>
                        <li>Dock the sidebar next to the content</li>
                        <li>Touch enabled: swipe to open and close the sidebar</li>
                        <li>Easy to combine with media queries for auto-docking (<a href="responsive_example.html">see example</a>)</li>
                        <li>Sidebar and content passed in as PORCs (Plain Old React Components)</li>
                        <li><a href="https://github.com/balloob/react-sidebar">Source on GitHub</a> (MIT license)</li>
                        <li>Only dependency is React</li>
                    </ul>
                    */}
                    <Button color = "primary" style = {styles.navbarButton} className = "btn btn-block">Menu</Button>
                    <Button color = "primary" style = {styles.navbarButton} className = "btn btn-block">What's new</Button>
                    <Button color = "primary" style = {styles.navbarButton} className = "btn btn-block">Specials/Exclusive</Button>
                    <Button color = "primary" style = {styles.navbarButton} className = "btn btn-block">Order Now</Button>
                    <Button color = "primary" style = {styles.navbarButton} className = "btn btn-block">About Us</Button>
                </div>
            </MaterialTitlePanel>
        );

        const sidebarProps = {
            sidebar: sideBarContent,
            docked: this.state.docked,
            sidebarClassName: 'custom-sidebar-class',
            open: this.state.open,
            touch: this.state.touch,
            shadow: this.state.shadow,
            pullRight: this.state.pullRight,
            touchHandleWidth: this.state.touchHandleWidth,
            dragToggleDistance: this.state.dragToggleDistance,
            transitions: this.state.transitions,
            onSetOpen: this.onSetOpen,
        };


        return (

            <div>


            <Sidebar
                    sidebar={sideBarContent}
                    open={this.state.sidebarOpen}
                    {...sidebarProps}
                />
            <Navbar
                isDocked = {this.state.docked}
                menuButtonClick = {this.menuButtonClick}
            />
            <br/>
            <ContentFlex
                title = "Welcome back"
                body = "Click below to repeat your recent order, or open up the menu to try something new!"
                ctaButton = {<a href="#" className="btn btn-primary">Reorder now</a>}
            />
            <br/>
            <ContentFlex
                title = "It's on us"
                body = "Thanks for being a loyal customer and friend, here's a free drink on us."
                ctaButton = {<a href="#" className="btn btn-primary">Claim Offer</a>}
                header = {<div className='card-header bg-warning'>Members only</div>}
            />
            <br/>
            <ContentFlex
                title = "Secret menu"
                body = "Psst, have you heard about the Nacho Chicken Wings?
                    Neither has anyone else, try our secret menu,
                    only for close friends."
                header = {<div className='card-header bg-warning'>Members only</div>}
            />
            <br/>
            <ContentFlex
                title = "Check this out!"
                body = "Come in and try out our new Spring Cocktail, created by our very own John Smith."
                header = {<div className='card-header'>Featured</div>}
            />



            </div>
        );
    }
}

export default App;
