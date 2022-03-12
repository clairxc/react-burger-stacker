// import React, { Component } from 'react';
import './App.css';
import Clear from './Clear'
import Ingredient from './Ingredient';


// class BurgerPane extends Component {
//     render() { 
//         const burger = this.props.burgerIngredients.map(layer=>{
//             return <Ingredient ingredient={layer} /> 
//             // purple ingredient is from this.props.ingredient in our Ingredient component
//         })
//         return (
//             <section className="burger-pane">
//                 <h1>Burger Pane</h1>
//                 {burger}
//                 <Clear clearBurger={this.props.clearBurger} />
//             </section>
//         );
//     }
// }

// refactor to functional component 
function BurgerPane(props) {
    const burger = props.burgerIngredients.map(layer=>{
        return(
            <Ingredient
                ingredient={layer}
            />
        )
    })
    return(
        <section className="burger-pane">
            <h1>Burger Pane</h1>
            {burger}
            <Clear clearBurger={props.clearBurger} />
        </section>
    )
}


export default BurgerPane;
