export type RootStackParamList = {
  // Auth Stack
  Login: undefined;
  Register: undefined;
  
  // Main Stack
  MainTabs: undefined;
  
  // Actividades Stack
  ActivityDetails: { id: string };
  ActivityCreate: undefined;
  ActivityEdit: { id: string };
  Actividades: undefined;
  
  // Asociados Stack
  Asociados: undefined;
  
  // Pagos Stack
  Pagos: undefined;
  
  // Participaciones Stack
  ParticipacionDetail: { id: number };
  ParticipacionCreate: undefined;
  ParticipacionEdit: { id: number };
  
  // Prestamos Stack
  PrestamoDetail: { id: number };
  PrestamoCreate: undefined;
  PrestamoEdit: { id: number };
  
  // New routes
  AsociadoCreate: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Registro: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Actividades: undefined;
  Asociados: undefined;
  Prestamos: undefined;
  Pagos: undefined;
}; 