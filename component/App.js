/**
 * Created by intelligrape on 25/4/17.
 */
import React from 'react';
class App extends React.Component {
    render(

    ) {
        const myStyle = {
            color: '#FF0000',
            fontSize:70
        };

        return (

            <div>
                <div>
                <p>-----------Multiple HTML tags------------------</p>
                <h1>To The New</h1>
                <h2>Noida , India</h2>
                <p>IT company</p>
                </div>
                <div>
                <p>-----------Custom attribute------------------------</p>
                    <p data-myattribute = "somevalue">This is the content!!!</p>
                </div>
                <div>
                    <p>-----------Expression------------------------</p>
                    <p>I am adding 2+2 in expression mode, and got:  {2+2} as a result</p>
                    <p>Compare 1==1 and got result : {1 == 1 ? 'True' : 'False'}</p>
                </div>
                <div>
                    <p>-----------Styling------------------------</p>
                    <p style={myStyle}>Hey I am using my style</p>
                </div>
            </div>
        )
    }
}
export default App;