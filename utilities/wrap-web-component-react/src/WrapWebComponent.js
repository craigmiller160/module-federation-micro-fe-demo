import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const WrapWebComponent = (props) => {
    if (!props.importPath || !props.webComponentName) {
        throw new Error('Missing required properties for WrapWebComponent');
    }

    useEffect(() => {
        import(props.importPath);
    }, []);

    const name = props.webComponentName;

    return (
        <name />
    );
};
WrapWebComponent.propTypes = {
    webComponentName: PropTypes.string.isRequired,
    importPath: PropTypes.string.isRequired
};