import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return Object.assign({}, { cache: state.cache });
}

function CacheDisplay(props) {
    return (
        <div>
            <h4>Cache Contents</h4>
            { JSON.stringify(props.cache, null, 4) }
        </div>
    )
}

const ReduxCacheDisplay = Object.freeze(connect(mapStateToProps)(CacheDisplay))
export { ReduxCacheDisplay as CacheDisplay }
export { ReduxCacheDisplay as default }
