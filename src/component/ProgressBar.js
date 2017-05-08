/**
 * Created by intelligrape on 8/5/17.
 */

import React, {Component} from 'react';
import PropType from 'prop-types'
class ProgressBar extends Component {
    constructor() {
        super();
        this.state = {
            amount : 'sss'
        }
    }

    render() {
        return(
            <div>
                Your file downloaded : {(this.props.downloaded * 100)/ this.props.total}
            </div>
        )
    }
}
ProgressBar.propTypes = {

    downloaded : PropType.number.isRequired,
    total: PropType.number.isRequired,
};

export default ProgressBar;