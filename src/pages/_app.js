import React from 'react';
import App, { Container } from 'next/app';
import moment from 'moment-timezone';
import 'moment/locale/en-gb';

import parseCookies from '../utils/parseCookies';

// TODO: Set using environment variables
moment.tz.setDefault('Africa/Nairobi');
moment.locale('en-GB');

const SENTRY_DSN = null;

const COOKIE_NAME = 'USER-SESSION';

class InsureIt extends App {
    /**
   * Don't create server or client specific logic here, this may cause errors
   * and checksum mismatches!
   */
  static async getInitialProps ({ Component, ctx }) {
    // Restore session on server to have preloaded state for client side
    if (ctx.isServer) {
      const cookies = parseCookies(ctx.req, COOKIE_NAME);

    //   if (cookies && cookies.accessToken) {
    //     await ctx.store.dispatch(restoreSession(cookies.accessToken));
    //   }
    }

    // Getting cookies client side:
    // cookies = Cookies.getJSON(cookieName);

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  constructor (props) {
    super(props);
    this.state = { error: null };

    if (SENTRY_DSN) {
    //   Raven.config(SENTRY_DSN).install();
    }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ error });

    if (SENTRY_DSN) {
    //   Raven.captureException(error, { extra: errorInfo });
    }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default InsureIt;