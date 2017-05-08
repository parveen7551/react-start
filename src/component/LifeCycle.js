/**
 * Created by intelligrape on 2/5/17.
 */
import React from 'react';
import Button from './Child.js'
class LifeCycle extends React.Component {
    constructor(){
        console.log('Parent---constructor');

        super();
        this.state = {
            child : 'child'
        }
    }
    componentWillMount() {
        console.log('Parent---componentwillmount');
    }
    componentDidMount(){
        console.log('Parent---componentdidmount');
    }
    componentWillReceiveProps() {
        console.log('Parent---componentWillReceiveProps');
    }
    shouldComponentUpdate() {
        console.log('Parent---shouldcomponentupdate');
        return true;
    }
    componentWillUpdate() {
        console.log('Parent---componentwillupdate');
    }

    componentDidUpdate() {
        console.log('Parent---componentdidupdate');

    }
    i =0;

    clickHandler = ()=> {
        this.i++;
      this.setState({
          child : 'child' + this.i
      });
    };
    render(){
        console.log('Parent---render');
        return(<div>
          <div>
              Parent
          </div>
            <Button child={this.state.child}/>
            <button onClick={this.clickHandler}>Update</button>
        </div>)
    }
}

export default LifeCycle;