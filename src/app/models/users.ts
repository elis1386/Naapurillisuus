export interface User{
  uid?: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  password: string;
  about?: string | null;
  role: string;
  phoneNumber?: string,
  photoURL?: string | null;
} 

