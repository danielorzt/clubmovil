export interface Asociado {
  id: number;
  documento: string;
  nombres: string;
  apellidos: string;
  fecha_nacimiento?: string;
  direccion_residencia?: string;
  telefono?: string;
  email?: string;
  created_at?: string;
  updated_at?: string;
}

export interface CreateAsociadoDTO {
  documento: string;
  nombres: string;
  apellidos: string;
  fecha_nacimiento?: string;
  direccion_residencia?: string;
  telefono?: string;
  email?: string;
}

export interface UpdateAsociadoDTO extends Partial<CreateAsociadoDTO> {} 