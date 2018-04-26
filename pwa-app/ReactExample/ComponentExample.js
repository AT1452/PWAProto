//How to make flexible, responsive components

import React, {Component} from 'react'; //must have this import to work with React
import PropTypes from "prop-types";
import ContentFlex from "./ContentFlex";

const styles = { //the css or style factors of a component
    root :{

    }
};

const Example = (props) => { //this combines a class declaration and a constructor, passing props as a parameter to the class with an arrow function (=>)

    const rootStyle = props.style ? {...styles.root, ...props.style} : styles.root; //the question mark or ternary operator is an "if" statement
                                                                                    //this checks if props.style exists, if so then it uses that to style the component
                                                                                    //else, it defaults to styles.root


    return ( //this is what is shown on the screen
        <div className={"card"} style = {rootStyle}> /*className tells this component what bootstrap style/component to use*/

            {props.header} /*this is the header supplied by the App.js class when this component is called,
                           it is customizable based on what the card header needs to be*/

            <div className="card-body"> /*Again, this className is a call to bootstrap*/

                <h5 className="card-title">{props.title}</h5> /*props.title (like props.header) is customizable when the component is called*/
                <p className="card-text">
                    {props.body} /*you can follow the pattern here*/
                </p>
                {props.ctaButton} /*same thing here*/
            </div>
        </div>



    )

};

Example.propTypes = {            /*As you can see by the name, this declares the type of the props in your component*/
    style: PropTypes.object,
    title: PropTypes.oneOfType([ /*The title can be a string, or some object like a button or some styled component*/
        PropTypes.string,
        PropTypes.object,
    ]),
    header: PropTypes.oneOfType([ /*same thing as above*/
        PropTypes.string,
        PropTypes.object,
    ]),
    body: PropTypes.oneOfType([ /*same thing*/
        PropTypes.string,
        PropTypes.object
    ]),
    ctaButton: PropTypes.object, /*This is a button, so it must be an object*/
    children: PropTypes.object,
};

export default Example; /*Export this component as a module so it can be called elsewhere, gotta do this*/