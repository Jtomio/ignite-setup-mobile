import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '../components/screens/Home'
import { New } from '../components/screens/New'
import { Habit } from '../components/screens/Habit'

export function AppRoutes() {
  return (

    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='new'
        component={New}
      />
      <Screen
        name='habit'
        component={Habit}
      />
    </Navigator>
  )
}