export interface Activity {
  id: string;
  name: string;
  description: string;
  date: Date;
  location: string;
  maxCapacity: number;
  status: 'active' | 'cancelled' | 'completed';
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CreateActivityDTO {
  name: string;
  description: string;
  date: Date;
  location: string;
  maxCapacity: number;
}

export interface UpdateActivityDTO extends Partial<CreateActivityDTO> {
  status?: 'active' | 'cancelled' | 'completed';
} 