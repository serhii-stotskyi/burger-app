import React, {Component} from 'react';

import Auxed from '../../hoc/Auxed';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INREDIENT_PRICES = {
    salad: 0.5,
    cheese: 4,
    meat: 1.3,
    bacon: 0.6
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
    };

    addInredientHandler = (type) => {
        debugger;
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    };

    removeIngredienthandler = (type) => {

    };

    render() {
        return (
            <Auxed>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                 indgredientAdded={this.addInredientHandler} />
            </Auxed>
        )
    }
}

export default BurgerBuilder;