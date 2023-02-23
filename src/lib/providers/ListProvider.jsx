import { createContext, useContext, useMemo, useState } from 'react';

import * as list from '../api/listsApi';
import { useAuth } from './AuthProvider';

const ListContext = createContext();
ListContext.displayName = 'ListContext';

function ListProvider(props) {
	const [lists, setLists] = useState(null);
	const [errorLists, setErrorLists] = useState(false);
	const [loadingLists, setLoadingLists] = useState(false);
	const { user } = useAuth();

	const getLists = async () => {
		setErrorLists(false);
		setLoadingLists(true);
		return list
			.getLists()
			.then(data => {
				console.log(data);
				if (data.data) setLists(data.data);
				if (data.error) setErrorLists(true);
				setLoadingLists(false);
				return data;
			})
			.catch(err => {
				setErrorLists(true);
				throw err;
			});
	};

	const getList = id => {
		return lists.find(list => list.id === id);
	};

	const createList = newList => {
		return list.createList({ ...newList, user_id: user.id });
	};

	const updateList = (listId, newData) => {
		return list.updateList(listId, newData);
	};

	const deleteList = listId => {
		return list.deleteList(listId);
	};

	const value = useMemo(
		() => ({
			lists,
			loadingLists,
			errorLists,
			setErrorLists,
			getLists,
			getList,
			createList,
			updateList,
			deleteList
		}),
		[
			lists,
			loadingLists,
			errorLists,
			getLists,
			setErrorLists,
			getList,
			createList,
			updateList,
			deleteList
		]
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
