import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Nav from '../src/Nav';
import allReducers from '../redux/reducers';

const initialState = {
    movieReducer: [
        {
            name: 'Harry Potter',
            price: '$15',
        },
        {
            name: 'Avatar',
            price: '$10',
        },
        {
            name: 'Inception',
            price: '$20',
        },
    ],
    userReducer: {
        loading: true,
        users: [],
        error: '',
    },
};

const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <Nav />
                <Component {...pageProps} />
            </Provider>
        </>
    );
}
export default MyApp;
