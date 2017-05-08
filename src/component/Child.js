/**
 * Created by intelligrape on 5/5/17.
 */
import React from 'react'


class Button extends React.Component {
    constructor() {
        super();
        console.log('Child---constructor');
    }

    componentWillMount() {
        console.log('child---componentwillmount');
    }

    componentDidMount() {
        console.log('child---componentdidmount');
    }
    componentWillReceiveProps() {
        console.log('child---componentWillReceiveProps');
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('child---shouldcomponentupdate');
        return true;
    }
    componentWillUpdate() {
        console.log('child---componentwillupdate');
    }

    componentDidUpdate() {
        console.log('child---componentdidupdate');

    }

    render() {
        console.log('child---render');
        return (<div>{this.props.child}</div>)
    }
}

export default Button;