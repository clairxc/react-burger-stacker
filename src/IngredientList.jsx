// import React, { Component } from 'react';
import './App.css';
import Ingredient from './Ingredient';


// class IngredientList extends Component {
//     render() { 
//         const ingredients = this.props.ingredients.map(ingredient=>{
//             return (
//                 <Ingredient 
//                     // ingredientName={ingredient.name}
//                     // ingredientColor={ingredient.color} 
//                     ingredient={ingredient}
//                     addToBurger={this.props.addToBurger}
//                 />)
//             // purple ingredient is food, orange ingredient is taco
//         })
//         return (
//             <section className="ingredient-list">
//                 <h1>Ingredient List</h1>
//                 {/* <Ingredient />  */}
//                 {ingredients}
//             </section>
//         );
//     }
// }

// refactor to functional component
function IngredientList (props) {
    const ingredients = props.ingredients.map(ingredient => {
        return(
            <Ingredient 
                ingredient={ingredient}
                addToBurger={props.addToBurger}
            />
        )
    })
    return(
        <section className="ingredient-list">
            <h1>Ingredient List</h1>
            {ingredients}
        </section>
    )
}
 
export default IngredientList;
 