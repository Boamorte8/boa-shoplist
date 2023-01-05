import { useCallback } from 'react';

import { client } from '../utils/api-client';
import useAuth from './useAuth';

function useClient() {
	const { user } = useAuth();
	const token = user?.token;
	return useCallback(
		(endpoint, config) => client(endpoint, { ...config, token }),
		[token]
	);
}

export default useClient;
