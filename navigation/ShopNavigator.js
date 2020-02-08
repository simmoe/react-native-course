//We dont actually export the module, instead we create an 'app container'i

//expo install react-navigation
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Platform } from 'react-native'

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen'
import CartScreen from '../screens/shop/CartScreen'
import OrderScreen from '../screens/shop/OrderScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailScreen'
import colors from '../constants/colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'
 


//createStackNavigator 
//1st arg: object with list of components we wish to route
//2nd arg: configuration object
//returns a navigational component

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary 
    }
})

export default createAppContainer(ProductsNavigator)