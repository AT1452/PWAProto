import React from 'react';
import PropTypes from 'prop-types';
import Content from "./Contents";

const styles = {
    root:{
    }
};

const ContentFlex = (props) => {
    const rootStyle = props.style ? {...styles.root, ...props.style} : styles.root;

    return (
        <div className="card" style={rootStyle}>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">
                    {props.body}
                </p>
                {props.ctaButton}
            </div>
        </div>
    )

};

Content.propTypes = {
    style: PropTypes.object,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    body: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    ctaButton: PropTypes.object,
    children: PropTypes.object,
};

export default ContentFlex;