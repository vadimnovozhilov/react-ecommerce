import React, { Component } from 'react';
import SHOP_DATA from './ShopData.js';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
}

export default ShopPage;