export interface Consultation {
  id?: number;
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  createdAt?: Date;
}