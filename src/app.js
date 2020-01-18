
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './view/Home'
import Diagnose from './view/Diagnose'

const AppNavigator = createStackNavigator({
    Home : {
        screen : Home
    },
    Diagnose : {
        screen : Diagnose
    }
},{
    initialRouteName : 'Home',
    headerMode : 'none'
})

export default createAppContainer(AppNavigator);