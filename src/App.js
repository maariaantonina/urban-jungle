import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import {
  createMuiTheme,
  StylesProvider,
  ThemeProvider,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { ShopPage } from './components/views/ShopPage/ShopPage';
import { Product } from './components/views/Product/Product';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#131313' },
    secondary: { main: '#9a0036' },
  },
  typography: {
    fontSize: 16,
    fontFamily: ['Inter', 'Arial', 'sans-serif'].join(','),
    h3: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: '1.25REM',
      letterSpacing: '0.25em',
    },
    body1: {
      fontFamily: ['Noto Serif', 'serif'].join(','),
    },
    body2: {
      fontFamily: ['Noto Serif', 'serif'].join(','),
      fontSize: '0.875REM',
    },
    subtitle1: {
      fontWeight: 700,
    },
    subtitle2: {
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: '1REM',
    },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/collections/:name" component={ShopPage} />
              <Route
                exact
                path="/collections/products/:id"
                component={Product}
              />
              <Route path="*" component={NotFound} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
