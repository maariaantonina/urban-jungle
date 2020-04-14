import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Grid
      container
      spacing={0}
      alignItems="center"
      className={styles.container}
    >
      <Grid item xs></Grid>
      <Grid item container justify="center" xs={6}>
        <Link variant="h6" component={RouterLink} to="/" underline="none">
          Urban Jungle
        </Link>
      </Grid>
      <Grid item container justify="flex-end" xs alignItems="flex-end">
        <Button>Cart</Button>
      </Grid>
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
