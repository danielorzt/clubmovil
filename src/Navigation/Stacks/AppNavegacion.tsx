import {NavigationContainer} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import AuthNavegacion from './AuthNavegacion';
import NavegacionPrincipal from './NavegacionPrincipal';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppNavegacion() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthState();
  }, []);

  const checkAuthState = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setIsAuthenticated(!!token);
    } catch (error) {
      console.error('Error checking auth state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return null; // Or a loading screen component
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <NavegacionPrincipal /> : <AuthNavegacion />}
    </NavigationContainer>
  );
}
