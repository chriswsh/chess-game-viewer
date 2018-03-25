import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ChessGameSelector from "../ChessGameSelector/ChessGameSelector";

import {
    showAlert,
    /* hideAlert, */
    loadGameToDisplay,
    fetchGame,
    setCurrentGameHash
} from "../../reducers/actions";

const mapStateToProps = state => {
    return Object.assign(
        {},
        {
            currentHash: state.display.currentHash,
            manifest: state.display.manifest,
            cache: state.cache,
            queue: state.fetchQueue
        }
    );
};

const mapDispatchToProps = dispatch => {
    return {
        loadGame: (hash, currentHash, cache, queue) => {
            // if the target and currently displayed games are the same, do nothing
            if (hash === currentHash) return;

            // Set the display target
            dispatch(setCurrentGameHash(hash));

            // If the hash isn't currently in the cache, we need to fetch it
            if (cache[hash] === undefined) {
                // But not if it's already being fetched
                if (queue.includes(hash)) return;

                // console.log(`Fetch queue: ${queue}`);
                dispatch(fetchGame(hash));
            } else {
                dispatch(loadGameToDisplay(cache[hash]));
                // dispatch(hideAlert());
                dispatch(
                    showAlert({
                        message: `Loaded Game from Cache`,
                        style: `info`
                    })
                );
            }
        },
        clearBoard: () => {
            dispatch(
                showAlert({
                    message: `Clear Board Not Yet Implemented`,
                    style: `warning`
                })
            );
        }
    };
};

const symbols = {
    divider: Symbol(`Game Selector Divider`),
    clear: Symbol(`Game Selector Clear`)
};

export function fullGameList(list) {
    if (!Array.isArray(list)) return undefined;

    if (list.length > 0)
        return [
            ...list,
            { description: symbols.divider },
            { description: symbols.clear }
        ];

    return undefined; // use undefined if empty list so that default props can take over
}

function ChessGameSelectorContainer(props) {
    return (
        <ChessGameSelector
            list={fullGameList(props.manifest)}
            symbols={symbols}
            loadGame={props.loadGame}
            clearBoard={props.clearBoard}
            cache={props.cache}
            queue={props.queue}
            currentHash={props.currentHash}
        />
    );
}

ChessGameSelectorContainer.propTypes = {
    manifest: PropTypes.array.isRequired,
    loadGame: PropTypes.func.isRequired,
    clearBoard: PropTypes.func.isRequired,
    cache: PropTypes.object.isRequired
};

const ReduxChessGameSelectorContainer = Object.freeze(
    connect(mapStateToProps, mapDispatchToProps)(ChessGameSelectorContainer)
);
export { ReduxChessGameSelectorContainer as ChessGameSelectorContainer };
export { ReduxChessGameSelectorContainer as default };
