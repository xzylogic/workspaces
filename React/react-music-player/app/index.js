import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import Hello from './components/hello'

// console.log(React.version);

render(
    <AppContainer>
        <Hello />
    </AppContainer>,
    document.getElementById('root')
);
if (module.hot) {
    module.hot.accept('./components/hello', () => {
        const NewHello = require('./components/hello').default;
        render(
            <AppContainer>
                <NewHello />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}