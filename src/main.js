/**
 * Created by intelligrape on 25/4/17.
 */
import React from 'react';
import {render} from 'react-dom';
import App from './component/App.js';
import MultiComp from './component/MultiComp.js';
import State from './component/State.js';
//import StateProps from './component/StateProps.js';
import Form from './component/Form.js';
import LifeCycle from './component/LifeCycle.js';
import ProgressBar from './component/ProgressBar';

// ReactDOM.render(<App/>, document.getElementById('app'));
render(<ProgressBar total={100} downloaded={50}/>, document.getElementById('app'));



