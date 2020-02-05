
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './view/Home'
import MainMenu from './view/MainMenu'
import Diagnose from './view/Diagnose'
import Result from './view/Result'
import Info from './view/Info'

const AppNavigator = createStackNavigator({
    Home : {
        screen : Home
    },
    Diagnose : {
        screen : Diagnose
    },
    Result : {
        screen : Result
    },
    MainMenu : {
        screen : MainMenu
    },
    Info: {
        screen : Info
    }
},{
    initialRouteName : 'Home',
    headerMode : 'none'
})

export default createAppContainer(AppNavigator);