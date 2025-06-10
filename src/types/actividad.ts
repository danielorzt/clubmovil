export interface Actividad {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: Date;
  lugar: string;
  cupo_maximo: number;
  estado: 'activa' | 'cancelada' | 'completada';
  created_at?: Date;
  updated_at?: Date;
}

export interface CreateActividadDTO {
  titulo: string;
  descripcion: string;
  fecha: Date;
  lugar: string;
  cupo_maximo: number;
}

export interface UpdateActividadDTO extends Partial<CreateActividadDTO> {
  estado?: 'activa' | 'cancelada' | 'completada';
} 