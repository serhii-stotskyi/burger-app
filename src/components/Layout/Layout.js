import React from 'react'
import Auxed from '../../hoc/Auxed';

const layout = (props) => (
    <Auxed>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxed>
);

export default layout;