import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ContactListScreen from './contacts/ContactListScreen'
import NavigationButton from '../components/UI/NavigationButton'
import FavContactListScreen from './contacts/FavContactListScreen'

const Stack = createStackNavigator()

const StackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="F. R. I. E. N. D. S." >
                <Stack.Screen 
                    name="F. R. I. E. N. D. S."
                    component={ContactListScreen}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <NavigationButton nav={navigation} /> 
                        )
                    })} />
                <Stack.Screen 
                    name="Favourite"
                    component={FavContactListScreen}
                    options={{
                        title: 'Favourite FRIENDS Stars'
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreen
