import React             from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider }      from 'react-redux';
import { store }         from './store/store';
import { Navigation }    from './containers/Navigation/Naviagtion';
import './App.css';

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Navigation />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
