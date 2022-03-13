// import React, { Component } from 'react';

// class Clear extends Component {
//     render() { 
//         return (
//             <button onClick={this.props.clearBurger}>Start Over</button>
//         );
//     }
// }
 
// export default Clear;

// refactor to functional component
function Clear (props) {
    return(
        <button onClick={props.clearBurger}>Start Over</button>
    )
}

export default Clear