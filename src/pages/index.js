import { Fragment, PureComponent } from 'react';

import { Flex } from 'grid-styled';

import basePage from '../hocs/basePage';

import MetaTags from '../components/MetaTags';

class HomePage extends PureComponent {
    static async getInitialProps ({ res, isServer }){

    }

    render () {
        return (
            <Fragment>
                <MetaTags />
            </Fragment>
        )
    }
}

export default basePage()(HomePage);