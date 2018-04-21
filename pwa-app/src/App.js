// App.js

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Contents from './Components/Contents'
import Sidebar from 'react-sidebar';

const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
    },
    content: {
        padding: '16px',
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

        var sideBarContent = <b>Sidebar content</b>;

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

            <Navbar>
                <p>Goof</p>
            </Navbar>
            <br/>
            <Contents />

            <Sidebar sidebar={sideBarContent}
                     open={this.state.sidebarOpen}
                     {...sidebarProps}

            >
            <span>
            {!this.state.docked &&
            <button onClick={this.menuButtonClick} style={styles.contentHeaderMenuLink}>=</button>}
            </span>
            </Sidebar>

            </div>
        );
    }
}

export default App;
