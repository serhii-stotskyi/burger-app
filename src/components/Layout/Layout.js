import React from 'react'
import Auxed from '../../hoc/Auxed';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css'

const layout = (props) => (
    <Auxed>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxed>
);

export default layout;