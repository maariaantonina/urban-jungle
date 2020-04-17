import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux.js';

import styles from './Product.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

const Component = ({
  className,
  children,
  name,
  photos,
  price,
  description,
  height,
}) => {
  const [amount, setAmount] = React.useState(1);
  return (
    <div className={clsx(className, styles.root)}>
      <Grid container justify="flex-end" spacing={6}>
        <Grid item xs={12} md={5} className={styles.photo}>
          <img src={photos[0]} alt={name}></img>
          <div className={styles.header}>
            <Typography variant="h3" gutterBottom={true}>
              {name}
            </Typography>
          </div>
          <GridList cellHeight={140} className={styles.gridList} cols={3}>
            {photos.map((tile) => (
              <GridListTile key={tile} cols={1}>
                <img src={tile} alt={name} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={styles.description}>
            <Typography variant="body2" color="secondary" gutterBottom>
              PLN {price}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              {description}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Height: {height}cm
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              May contain small irregularities & vary slightly in shape & color.
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Free shipping over PLN150. Worldwide shipping available.
            </Typography>
            <div className={styles.amount}>
              <Typography variant="body2" color="secondary" gutterBottom>
                AMOUNT
              </Typography>
              <div className={styles.amount_buttons}>
                <IconButton
                  onClick={() => setAmount(amount - 1)}
                  color="primary"
                  aria-label="add"
                  component="span"
                  disabled={amount < 2 ? true : false}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="h6">{amount}</Typography>
                <IconButton
                  onClick={() => setAmount(amount + 1)}
                  color="primary"
                  aria-label="remove"
                  component="span"
                  disabled={amount > 9 ? true : false}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            <Button>Add to cart</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  photos: PropTypes.array,
  price: PropTypes.number,
  height: PropTypes.number,
};

const mapStateToProps = (state, props) => {
  const product = getById(state, props.match.params.id);
  return {
    ...product,
  };
};

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
