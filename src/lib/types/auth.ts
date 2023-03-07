import { AuthError, AuthResponse, Session, User } from '@supabase/supabase-js';
import { Dispatch, ReactNode, SetStateAction } from 'react';

export type AuthProviderProps = {
	children?: ReactNode;
};

export type AuthFormProps = {
	email: string;
	password: string;
};

export type AuthContextProps = {
	user: User | null;
	login: (form: AuthFormProps) => Promise<
		| {
				data: {
					user: User | null;
					session: Session | null;
				};
				error: null;
		  }
		| {
				data: {
					user: null;
					session: null;
				};
				error: AuthError;
		  }
		| undefined
	>;
	logout: () => void;
	register: (form: AuthFormProps) => Promise<AuthResponse | undefined>;
	openConfirmLogout: boolean;
	setOpenConfirmLogout: Dispatch<SetStateAction<boolean>>;
};
