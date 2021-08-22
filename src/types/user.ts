export interface User {
  uid: string;
  email: string;
  photoURL: string | null;
}

export type UserRole = "basic" | "standard" | "premium";
