/**
 * Created by intelligrape on 26/4/17.
 */
import React from 'react';

class State extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {name: 'Rubi', empId: 1632},
                {name: 'Mahima', empId: 1235},
                {name: 'Mayank', empId: 6543},
                {name: 'Gaurav', empId: 5432},
            ]
        };

    }

    render() {
        return (<div>
            Emp detail
            <ul>
                {this.state.data.map((emp, index) =>
                    <li>{emp.name}</li>
                )}
            </ul>
        </div>)
    }
}
export default State;