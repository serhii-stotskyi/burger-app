import React, { Component } from 'react';

import Auxed from '../../hoc/Auxed'

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxed>
                <div>Burget</div>
                <div>Build Controls</div>
            </Auxed>
        )
    }
}

export default BurgerBuilder;