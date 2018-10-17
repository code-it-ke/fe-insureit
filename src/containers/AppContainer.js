import { Component } from 'react';
import * as cookie from 'js-cookie';
import { boolean, func, node, object, string } from 'prop-types';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import { Box, Flex } from 'grid-styled';

import Banner from '../components/atoms/Banner';


Router.onRouteChangeStart = (url) => { console.log(`Loading: ${url}`); NProgress.start(); };
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

const CookieClose = styled.button`
  background: 0;
  border: 0;
  padding: 0;
`;

class AppContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            isHomepage: false,
            isCookieBannerVisible: false,
        };
    }

    static defaultProps = {
        title: 'InsureIt',
    };

    handleCookie = () => {
        cookie.set('COOKIE_BANNER', 'allow', { expires: 365, path: '/' });
        this.setState({ isCookieBannerVisible: false });
    };

    render () {
        const { title, children, description, url, ogImage }  = this.props;
        const { isCookieBannerVisible } = this.state;

        return (
            <div id="outerContainer">
                <Head>
                    <meta charSet="UTF-8" />
                    <title>{title}</title>
                    <meta name="description" content={description || defaultDescription} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
                    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
                    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
                    <link rel="icon" href="/static/favicon.ico" />
                    <meta property="og:url" content={url || defaultOGURL} />
                    <meta property="og:title" content={title || ''} />
                    <meta property="og:description" content={description || defaultDescription} />
                    <meta name="twitter:site" content={url || defaultOGURL} />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content={ogImage || defaultOGImage} />
                    <meta property="og:image" content={ogImage || defaultOGImage} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />

                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Zilla+Slab:400,700" />
                </Head>

                <div id="pageWrap">
                    <div id="website-header-navigation">
                        <p>Header content will go here</p>
                    </div>
                    {children}
                </div>

                <Banner p={1} shouldShow={isCookieBannerVisible}>
                    <Flex
                        flex={5}
                        flexDirection={['column', 'column', 'row']}
                        alignItems={['flex-start', 'flex-start', 'center']}
                        justifyContent={'space-between'}
                    >
                        <Box flex={[1, 1, 3]}>
                            <p>By continuing to browse or by clicking “Accept All Cookies”, you agree to the
                            storing of 1st and 3rd-party cookies on your device to enhance site navigation,
                            analyze site usage, and assist in our marketing efforts.</p>
                        </Box>
                        <Box flex={[1, 1, 1]} ml={[0, 0, 2]} mt={[1, 1, 0]}>
                            <button onClick={this.handleCookie}>
                                Accept All Cookies
                            </button>
                        </Box>
                    </Flex>
                    <Box flex={0} alignSelf={['flex-start', 'flex-start', 'center']} ml={[1, 1, 0]}>
                        <CookieClose onClick={this.handleCookie} aria-label='Close Cookie Banner'>
                            x
                        </CookieClose>
                    </Box>
                </Banner>
            </div>
        )
    }
}

AppContainer.propTypes = {
    children: node,
    title: string,
    description: string,
}

export default withRouter(AppContainer);