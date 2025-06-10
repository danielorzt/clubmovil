export interface Prestamo {
  id: number;
  asociado_id: number;
  valor_prestamo: number;
  tasa_interes?: number;
  numero_cuotas: number;
  fecha_prestamo: string;
  created_at?: string;
  updated_at?: string;
  asociado?: {
    nombres: string;
    apellidos: string;
    documento: string;
  };
  pagos?: Pago[];
}

export interface CreatePrestamoDTO {
  asociado_id: number;
  valor_prestamo: number;
  tasa_interes?: number;
  numero_cuotas: number;
  fecha_prestamo: string;
}

export interface UpdatePrestamoDTO extends Partial<CreatePrestamoDTO> {}

export interface Pago {
  id: number;
  prestamo_id: number;
  fecha_pago: string;
  valor_pago: number;
  numero_cuota: number;
  created_at?: string;
  updated_at?: string;
} 