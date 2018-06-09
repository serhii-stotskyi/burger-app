import React from 'react'
import Auxed from '../../hoc/Auxed';
import classes from './Layout.css'

const layout = (props) => (
    <Auxed>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxed>
);

export default layout;