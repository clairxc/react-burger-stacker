// import React, { Component } from 'react';

// class Ingredient extends Component {
//     render() { 
//         return (
//             <div className="ingredient" 
//             onClick={()=>{
//                 this.props.addToBurger(this.props.ingredient)
//             }}>
//                 {/* <h1>Ingredient</h1> */}
//                 <p>{this.props.ingredient.name}</p>
//             </div>
//         );
//     }
// }

// refactor to functional component
function Ingredient (props) {
    return(
        <div className="ingredient" 
            onClick={()=>{
                props.addToBurger(props.ingredient)
            }}>
            <p>{props.ingredient.name}</p>
            {Ingredient}
        </div>
    )
}
 
export default Ingredient;