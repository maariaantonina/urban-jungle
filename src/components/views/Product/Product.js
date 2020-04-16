import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { CategoriesNav } from '../../layout/CategoriesNav/CategoriesNav';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Grid container spacing={5} className={styles.container}>
      <Grid container item xs={12} md={9} justify="flex-end">
        <Grid item xs={12} md={5} className={styles.photo}>
          <img
            src="https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1868&q=80"
            alt="some plant"
          ></img>
          <div className={styles.header}>
            <Typography variant="h3" gutterBottom={true}>
              Free shipping
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.description}></Grid>
      </Grid>
      <Hidden smDown>
        <Grid item md>
          <Box className={styles.sideNav}>
            <CategoriesNav></CategoriesNav>
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Product,
  // Container as Product,
  Component as ProductComponent,
};
