import React from 'react';
import ApplicationContainer from '../components/containers/ApplicationContainer';
import { Provider } from 'react-redux';
import configureStore from '../store/FoodCartApplicationStore';

const store = configureStore();
class FoodCartApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ApplicationContainer />
            </Provider>
        );
    }
}

export default FoodCartApplication;