export type Member = {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: Date;
  status: 'active' | 'inactive';
};

export interface CreateMemberDTO {
  documentId: string;
  firstName: string;
  lastName: string;
  birthDate?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export interface UpdateMemberDTO extends Partial<CreateMemberDTO> {} 