export type Payment = {
  id: string;
  amount: number;
  description: string;
  date: Date;
  status: 'pending' | 'completed' | 'failed';
}; 