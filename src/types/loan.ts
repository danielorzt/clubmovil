export type Loan = {
  id: string;
  amount: number;
  description: string;
  installments: number;
  startDate: Date;
  status: 'active' | 'paid' | 'defaulted';
};

export interface Loan {
  id: number;
  memberId: number;
  loanAmount: number;
  interestRate?: number;
  numberOfInstallments: number;
  loanDate: string;
  createdAt?: string;
  updatedAt?: string;
  member?: {
    firstName: string;
    lastName: string;
    documentId: string;
  };
  payments?: Payment[];
}

export interface CreateLoanDTO {
  memberId: number;
  loanAmount: number;
  interestRate?: number;
  numberOfInstallments: number;
  loanDate: string;
}

export interface UpdateLoanDTO extends Partial<CreateLoanDTO> {}

export interface Payment {
  id: number;
  loanId: number;
  paymentDate: string;
  paymentAmount: number;
  installmentNumber: number;
  createdAt?: string;
  updatedAt?: string;
} 