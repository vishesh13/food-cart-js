import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItemsView from './MenuItemsView';
import LisOptionsView from './ListOptionsView';
import MealsMenuView from './MealsMenuView';

const ApplicationView = ({ handleListView, displayListView, mainCartValue }) => {
    return (
        <div id="APPLICATION_VIEW" style={{ height: '100%' }}>
            <Grid container style={{ height: '90%' }}>
                <Grid item lg={12}>
                    <MenuItemsView handleListView={handleListView} mainCartValue={mainCartValue}/>
                </Grid>
                <Grid item lg={3} style={{ height: '100%' }}>
                    <LisOptionsView displayListView={displayListView} />
                </Grid>
                <Grid item lg={6} style={{ height: '100%' }}>
                    <MealsMenuView />
                </Grid>
            </Grid>
        </div>
    )
}

export default ApplicationView;