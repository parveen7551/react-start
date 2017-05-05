/**
 * Created by intelligrape on 26/4/17.
 */
import React from 'react';
import Area from './Area';

class MultiComp extends React.Component {

    render(){
        return(
            <div>
            <Header></Header>
            <Container></Container>
            <Footer></Footer>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        const headerStyle = {
            background: '#00AB77',
            height: '115px',
            margin: '0 auto 18px',
            overflow: 'hidden',
            textAlign: 'center'

        };
        return (
            <header style={headerStyle}>
                <h1>Mean Stack</h1>
            </header>
        )
    }
}
class Container extends React.Component {
    render(){

        const bodyStyle = {
            color: '#FF0000'
        };

        return(
            <div style={bodyStyle}>
             <ul>
                 <Area area="Mongo">
                 </Area>
                 <Area area="Express">
                 </Area>
                 <Area area="AngularJS">
                 </Area>
                 <Area area="NodeJs">
                 </Area>
             </ul>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        const footerStyle = {
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0,
            padding: '1rem',
            backgroundColor: '#efefef',
            textAlign: 'center'
        };
        return(
            <footer style={footerStyle}>
                Please contact with us on email id: rubisaini2009@gmail.com
            </footer>
        )
    }
}

export default MultiComp;