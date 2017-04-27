/**
 * Created by intelligrape on 26/4/17.
 */
import React from 'react';
require("../assets/style.css")

class StateProps extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {title: 'All', description: 'You can find all type of results from this section'},
                {title: 'Image', description: 'Image related to search string'},
                {title: 'News', description: 'You can find all type of news from this section'},
            ]
        };
    }

    showDescription(section) {
        this.setState({section});
    };

    render() {
        return (
            <div>
                <h1>{this.props.appInfo}</h1>
                <div className="header">
                    {this.state.data.map((section, index) => <div key={index}
                                                                  onClick={() => this.showDescription(section)}>{section.title}</div>)}
                </div>
                <DetailSection sectionProp={this.state.section}></DetailSection>
            </div>)
    }
}

StateProps.defaultProps = {
    appInfo: "Use state and props",
};

class DetailSection extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.sectionProp && this.props.sectionProp.description}
            </div>
        )
    }
}

export default StateProps;