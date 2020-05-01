import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchProducts } from '../../../redux/productsRedux.js';

import styles from './ProductsList.module.scss';

import Grid from '@material-ui/core/Grid';

import { ProductBox } from '../../features/ProductBox/ProductBox.js';

class Component extends React.Component {
  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }
  render() {
    const { products, className, match } = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <Grid container spacing={5}>
          {match.params.name === 'all'
            ? products.map((product) => (
                <Grid item xs={12} md={4} key={product._id}>
                  <ProductBox {...product}></ProductBox>
                </Grid>
              ))
            : products
                .filter(
                  (product) => product.category.name === match.params.name
                )
                .map((product) => (
                  <Grid item xs={12} md={4} key={product._id}>
                    <ProductBox {...product}></ProductBox>
                  </Grid>
                ))}
        </Grid>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  match: PropTypes.object,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (arg) => dispatch(fetchProducts(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductsList,
  Container as ProductsList,
  Component as ProductsListComponent,
};
