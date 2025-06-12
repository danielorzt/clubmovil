export type RootStackParamList = {
  // Auth Stack
  Login: undefined;
  Register: undefined;
  
  // Main Stack
  MainTabs: undefined;
  
  // Activities Stack
  ActivityDetails: { id: string };
  ActivityCreate: undefined;
  ActivityEdit: { id: string };
  Activities: undefined;
  
  // Members Stack
  Members: undefined;
  MemberCreate: undefined;
  MemberEdit: { id: string };
  MemberDetails: { id: string };
  
  // Payments Stack
  Payments: undefined;
  PaymentCreate: undefined;
  PaymentEdit: { id: string };
  PaymentDetails: { id: string };
  
  // Loans Stack
  Loans: undefined;
  LoanCreate: undefined;
  LoanEdit: { id: string };
  LoanDetails: { id: string };
  
  // Participations Stack
  ParticipationDetail: { id: number };
  ParticipationCreate: undefined;
  ParticipationEdit: { id: number };
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
}; 