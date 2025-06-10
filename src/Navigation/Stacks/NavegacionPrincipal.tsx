import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../types/navigation';
import Home from '../../Screen/Home';
import Profile from '../../Screen/Profile';
import Settings from '../../Screen/Settings';

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function NavegacionPrincipal() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Inicio',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Perfil',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Configuración',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
