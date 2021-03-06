type CounterState = {
  value: number;
};

type AuthState = {
  user: Record<string, unknown>; // TODO: change to User type;
  isAuthorized: boolean;
  isLoading: boolean;
};

export type { CounterState, AuthState };
