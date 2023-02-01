import { createContext, useContext, useMemo, useState } from 'react';

import * as list from '../api/listsApi';
import { useAuth } from './AuthProvider';

const ListContext = createContext();
ListContext.displayName = 'ListContext';

function ListProvider(props) {
	const [lists, setLists] = useState(null);
	const [loadingLists, setLoadingLists] = useState(false);
	const { user } = useAuth();

	const getLists = () => {
		setLoadingLists(true);
		return list.getLists().then(data => {
			if (data.data) setLists(data.data);
			setLoadingLists(false);
			return data;
		});
	};

	const createList = newList => {
		return list.createList({ ...newList, user_id: user.id });
	};

	const value = useMemo(
		() => ({ lists, loadingLists, getLists, createList }),
		[lists, getLists, createList]
	);

	return <ListContext.Provider value={value} {...props} />;
}

const useList = () => {
	const context = useContext(ListContext);
	if (context === undefined) {
		throw new Error(`useList must be used within a ListProvider`);
	}
	return context;
};

export { ListProvider, useList };
