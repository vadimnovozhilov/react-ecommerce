import React, { Component } from 'react';
import SHOP_DATA from './ShopData.js';
import PreviewCollection from '../../Components/PreviewCollection/PreviewCollection.js';

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div className='shop-page'>
                {
                    this.state.collections.map(({ id, ...collectionProps }) => (
                        <PreviewCollection key={id} {...collectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;