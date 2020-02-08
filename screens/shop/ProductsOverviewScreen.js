import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

const ProductsOverviewScreen = props => {
    //Useselector is a hook to access the redux store's state. It takes a selector function as an argument,  called with the store state.
    const products = useSelector( state => state.products.availableProducts)
return <FlatList data={products} renderItem={ itemData => <Text>{itemData.item.title}</Text> } />
}

export default ProductsOverviewScreen