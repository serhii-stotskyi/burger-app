import React, { Component } from 'react';

import Auxed from '../../hoc/Auxed';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese:2,
            meat: 2
        }
    }
    render() {
        return (
            <Auxed>
                <Burger ingredients={this.state.ingredients} />
                <div>Build Controls</div>
            </Auxed>
        )
    }
}

export default BurgerBuilder;