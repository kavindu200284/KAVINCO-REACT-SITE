interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

const STORAGE_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const auth = {
  login: async (email: string, password: string): Promise<AuthResponse> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password.length < 6) {
      throw new Error('Invalid credentials');
    }

    const token = `jwt_${Math.random().toString(36).substr(2, 9)}`;
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
    };

    localStorage.setItem(STORAGE_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    return { token, user };
  },

  signup: async (email: string, password: string, name: string): Promise<AuthResponse> => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }

    const token = `jwt_${Math.random().toString(36).substr(2, 9)}`;
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
    };

    localStorage.setItem(STORAGE_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    return { token, user };
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(USER_KEY);
  },

  getToken: (): string | null => {
    return localStorage.getItem(STORAGE_KEY);
  },

  getUser: (): User | null => {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(STORAGE_KEY);
  },
};
