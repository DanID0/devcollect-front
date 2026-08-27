type Role = 'USER' | 'ADMIN';

export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  profileDescription?: string;
  role: Role;
}

export interface Registration {
  username: string;
  email: string;
  password: string;
}

export interface Login {
  identifier: string;
  password: string;
}
export interface ProfileUpdatePayload {
  username: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  avatarUrl?: string | null;
  profileDescription: string;
}
