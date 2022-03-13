import './App.css';
// import React, { Component } from 'react';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import React, { useState } from 'react'


// class App extends Component {

//   state = { 
//     // this stays stagnant the whole time
//     // we put the array of ingredients in index.js bc it was just too much to display and called it through props
//     // ingredients: this.props.ingredientList,
//     burgerIngredients: []
//   }

//   clearBurger = () => {
//     this.setState({burgerIngredients: []})
//   } //now we need to pass this down to Burgerpane to our clear button

//   addToBurger = (ingredient) => {
//     // console.log('adding to burger')
//     // add the selected ingredient to the burgerIngredients state, that means we need to know what the ingredient is-- pass name and color as an arg instead of a singular event bc we need to click on the whole div not just one single event
//     // this.setState((prevState, props)=>{
//     //   return {burgerIngredients: [...prevState.burgerIngredients, {name:name, color:color}]}
//     // })
//     console.log('HUYUUUUUUU')
//     let newBurgerList = this.state.burgerIngredients
//     // newBurgerList.push(ingredient)
//     newBurgerList.unshift(ingredient)
//     this.setState({burgerIngredients: newBurgerList})
//   }

//   render() { 
//     return (
//       <>
//         <main>
//           <h1>Burgerstacker</h1>
//           <IngredientList 
//             ingredients={this.props.ingredientsList} 
//             addToBurger={this.addToBurger}/>
//           <BurgerPane 
//             burgerIngredients={this.state.burgerIngredients}
//             clearBurger={this.clearBurger}
//           />
//         </main>
//       </>
//     );
//   }
// }

// refactor to functional component
function App (props) {

  // state
  const [burgerIngredients, setBurgerIngredients] = useState([])

  const clearBurger = () => {
    setBurgerIngredients([])
  }

  const addToBurger = (ingredient) => {
    console.log('HUYUUUUUU')
    // so this works, but the order is wrong?-- can't use .push or .unshift in functional components, need to use .concat()
    // .concat returns an updated array
    // setBurgerIngredients(burgerIngredients => burgerIngredients.concat(ingredient))
    setBurgerIngredients(burgerIngredients => [...burgerIngredients, ingredient]) //this one uses the spread operator
    // what's the difference between this one and the above it? both ways work
  }
  

  return (
      <>
        <main>
          <h1>Burgerstacker</h1>
          <IngredientList 
            ingredients={props.ingredientsList} 
            addToBurger={addToBurger}/>
          <BurgerPane 
            burgerIngredients={burgerIngredients}
            clearBurger={clearBurger}
          />
        </main>
      </>
  )
}

 
export default App;

