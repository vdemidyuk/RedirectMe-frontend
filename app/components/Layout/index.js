/**
 *
 * Layout
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  makeStyles,
} from '@material-ui/core/styles';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(1, 1),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#fafafa',
    padding: theme.spacing(6),
  },
}));

const Layout = props => {
  const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: 'Ubuntu',
      },
    }),
  );

  const classes = useStyles();

  const yearNow = new Date().getFullYear();
  const yearStr = yearNow === 2020 ? yearNow : `2020 - ${yearNow}`;
  const { children } = props;

  const handleNewLink = props.handleNewLink ? props.handleNewLink : () => {};

  return (
    <ThemeProvider theme={theme}>
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <CssBaseline />
      <AppBar
        position="relative"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Link color="inherit" href={window.location.origin}>
            <CallMissedOutgoingIcon className={classes.icon} />
          </Link>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            <Link color="inherit" href={window.location.origin}>
              Redirect Me Online
            </Link>
          </Typography>
          <nav>
            <Button
              to="/"
              onClick={handleNewLink}
              component={RouterLink}
              color="primary"
              className={classes.link}
            >
              New
            </Button>
            <Button
              to="/history"
              component={RouterLink}
              color="primary"
              className={classes.link}
            >
              History
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>
            {children}
          </Grid>
          {/* <Grid container spacing={4}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} align="center">
              <Typography variant="h6" color="error">
                Pardon us!
              </Typography>
              <Typography variant="h6">
                We've discovered our domain name is in some black lists after purchasing it. We work towards fixing it.
              </Typography>
            </Grid>
          </Grid> */}
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          The free URL shortener. <br />
          Redirect to app schema. <br />
          Receive skype call from your PDF CV with one click.
        </Typography>
        <hr />
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href={window.location.origin}>
            RedirectMe.Online
          </Link>{' '}
          {yearStr}
          {'.'}
        </Typography>
      </footer>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  handleNewLink: PropTypes.func,
  children: PropTypes.node,
};

export default memo(Layout);
