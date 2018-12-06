import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

import '!file-loader?name=[name].[ext]!./images/favicon.png';

const root = document.getElementById('app');
render(<App />, root);
