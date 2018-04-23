// App.js

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Contents from './Components/Contents'
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from './Components/MaterialTitlePanel'
import MediaQuery from 'react-responsive';
import ContentFlex from './Components/ContentFlex'

var responsiveWidth = window.outerWidth * 0.45;

/**if(window.outerWidth < 438){
    responsiveWidth = window.outerWidth * 0.45;
}
else if(window.outerWidth > 438){
    responsiveWidth = window.outerWidth * 0.45;
}**/


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
                    <button className="btn btn-primary btn-block">Menu</button>
                    <button className="btn btn-primary btn-block">What's new</button>
                    <button className="btn btn-primary btn-block">Specials/Exclusive</button>
                    <button className="btn btn-primary btn-block">Order now</button>
                    <button className="btn btn-primary btn-block">About us</button>
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
            >
            </Sidebar>


            <Navbar
                isDocked = {this.state.docked}
                menuButtonClick = {this.menuButtonClick}
            />
            <br/>
            <ContentFlex
                title = "Welcome back"
                body = "Click below to repeat your recent order, or open up the menu to try something new!"
                ctaButton = {<a href="#" className="btn btn-primary">Order now</a>}
            />
            <br/>
            <ContentFlex
                title = "Flexible response"
                body = "JFK's genius plan to actually do what the situation calls for, what a guy"
                ctaButton = {<a href="#" className="btn btn-primary">Launch nuke</a>}
            />

            </div>
        );
    }
}

export default App;
