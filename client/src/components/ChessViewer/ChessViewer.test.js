import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ChessViewer from './ChessViewer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chessViewerReducer from '../../reducers/chessViewerReducer';

let store = createStore(chessViewerReducer);

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json'
    }
  });
};

it('renders without crashing', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve(mockResponse(200, null, '{"manifest": [] }')));

    const rendered = mount(<Provider store={ store }><ChessViewer/></Provider>);
});
