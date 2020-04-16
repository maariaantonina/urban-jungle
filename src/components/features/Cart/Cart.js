import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { countItems } from '../../../redux/cartRedux.js';

import styles from './Cart.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <h2>Cart</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  cartItems: countItems(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
