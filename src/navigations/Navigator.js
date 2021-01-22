import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import Bakso from '../screens/Bakso'
import Ayam from '../screens/Ayam'
import Mie from '../screens/Mie'
import Nasi from '../screens/Nasi'
import Beli_bakso from '../screens/Beli_bakso'
import Beli_ayam from '../screens/Beli_ayam'
import Beli_mie from '../screens/Beli_mie'
import Beli_nasi from '../screens/Beli_nasi'

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown:false
}

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Bakso" component={Bakso}/>
            <Stack.Screen name="Ayam" component={Ayam}/>
            <Stack.Screen name="Mie" component={Mie}/>
            <Stack.Screen name="Nasi" component={Nasi}/>
            <Stack.Screen name="mbasbakso" component={Beli_bakso}/>
            <Stack.Screen name="mbasayam" component={Beli_ayam}/>
            <Stack.Screen name="mbasmie" component={Beli_mie}/>
            <Stack.Screen name="mbasnasi" component={Beli_nasi}/>
        </Stack.Navigator>
    )
}
export default HomeStackNavigator;