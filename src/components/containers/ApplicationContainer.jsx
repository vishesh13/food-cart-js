import React from 'react';
import PropTypes from 'prop-types';
import ApplicationView from '../views/ApplicationView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as foodCartActions from '../../actions/foodCartAction';
// import { getDisplayListViewState } from '../../selectors/foodCartSelectors';

class ApplicationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleListView = this.handleListView.bind(this);
    }

    handleListView(event) {
        if (event) {
            this.props.displayListView ? this.props.foodCartActions.hideListView() : this.props.foodCartActions.displayListView();
        }
    }

    render() {
        return (
            <ApplicationView handleListView={this.handleListView} {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        displayListView: state.displayListView,
        mainCartValue: state.mainCartValue
    }
};

const mapDispatchToProps = dispatch => ({
    foodCartActions: bindActionCreators(foodCartActions, dispatch),
});

ApplicationContainer.propTypes = {
    cartDetailsState: PropTypes.shape({
        mainCartValue: PropTypes.number,
        displayListView: PropTypes.bool,
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);