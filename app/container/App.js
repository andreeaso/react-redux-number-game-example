import React, { Component } from 'react';
import Stars from "../components/Stars";
import Game from "./Game";
import { store } from 'redux-modules/redux';
import { Provider } from 'react-redux';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Game/>
                </div>
            </Provider>
        );
    }
}

export default App;
