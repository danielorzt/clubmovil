import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PantallaLogin from '../../../Screen/Auth/Login';
import PantallaRegistro from '../../../Screen/Auth/Registro';
import {RootStackParamList} from '../../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthNavegacion() {
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
        name="Login"
        component={PantallaLogin}
        options={{
          title: 'Iniciar sesión',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Registro"
        component={PantallaRegistro}
        options={{
          title: 'Registrarse',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
