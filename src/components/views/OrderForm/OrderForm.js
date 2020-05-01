import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { allProducts, addDiscountCode } from '../../../redux/cartRedux';

import styles from './OrderForm.module.scss';

import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Badge from '@material-ui/core/Badge';

class Component extends React.Component {
  state = {
    client: {
      firstName: '',
      lastName: '',
      email: '',
    },
    discountCode: '',
    error: null,
  };
  submitDiscountCode = (e) => {
    const { discountCode } = this.state;
    const { addDiscountCode } = this.props;
    e.preventDefault();
    addDiscountCode(discountCode);
    this.setState({ discountCode: '' });
  };
  changeDiscountCode = ({ target }) => {
    const { value } = target;
    this.setState({ discountCode: value });
  };
  updateInputValue = ({ target }) => {
    const { client } = this.state;
    const { value, name } = target;

    this.setState({ client: { ...client, [name]: value } });
  };
  render() {
    const { products, className } = this.props;
    const { submitDiscountCode, changeDiscountCode } = this;
    return (
      <div className={clsx(className, styles.root)}>
        <TableContainer component={Paper}>
          <Table className={styles.table} aria-label="simple table">
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell component="th" scope="row">
                    <div className={styles.photo}>
                      <Badge badgeContent={product.amount} color="secondary">
                        <img src={product.photos[0]} alt={product.name}></img>
                      </Badge>
                      <div className={styles.name}>{product.name}</div>
                    </div>
                  </TableCell>
                  <TableCell align="right">
                    PLN {product.amount * product.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <form
          noValidate
          autoComplete="off"
          onSubmit={submitDiscountCode}
          className={styles.discountCode}
        >
          <TextField
            id="outlined-basic"
            label="Discount Code"
            variant="outlined"
            onChange={changeDiscountCode}
          />
          <Button type="submit">Apply</Button>
        </form>

        <form
          noValidate
          autoComplete="off"
          onSubmit={submitDiscountCode}
          className={styles.clientData}
        >
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={this.updateInputValue}
            name="firstName"
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={this.updateInputValue}
            name="lastName"
            margin="normal"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={this.updateInputValue}
            name="email"
            margin="normal"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  addDiscountCode: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: allProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  addDiscountCode: (arg) => dispatch(addDiscountCode(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as OrderForm,
  Container as OrderForm,
  Component as OrderFormComponent,
};
