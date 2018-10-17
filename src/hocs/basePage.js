import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import theme from '../components/Theme';

import AppContainer from '../containers/AppContainer';

const basePage = () => (Child) => {
    class WrappedComponent extends Component {
        static async getInitialProps (context) {
            try {
                if(Child.getInitialProps){
                    return Child.getInitialProps(context);
                }
            } catch (error) {
                throw error;
            }
        }

        render () {
            return (
                <ThemeProvider theme={theme}>
                    <ModalProvider> 
                        <AppContainer>
                            <Child { ...this.props } />
                        </AppContainer>
                    </ModalProvider>
                </ThemeProvider>
            );
        }
    }

    return WrappedComponent;
};

export default basePage;