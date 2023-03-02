import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react';

import * as list from '../api/listsApi';
import { useAuth } from './AuthProvider';

const ListContext = createContext();
ListContext.displayName = 'ListContext';

function ListProvider(props) {
	const [lists, setLists] = useState(null);
	const [selectedList, setSelectedList] = useState(null);
	const [errorLists, setErrorLists] = useState(false);
	const [loadingLists, setLoadingLists] = useState(false);
	const [errorList, setErrorList] = useState(false);
	const [loadingList, setLoadingList] = useState(false);
	const { user } = useAuth();

	const getLists = useCallback(async () => {
		setErrorLists(false);
		setLoadingLists(true);
		return list
			.getLists()
			.then(data => {
				if (data.data) setLists(data.data);
				if (data.error) setErrorLists(true);
				setLoadingLists(false);
				return data;
			})
			.catch(err => {
				setErrorLists(true);
				throw err;
			});
	}, []);

	const getList = useCallback(async id => {
		setSelectedList(null);
		setErrorList(false);
		setLoadingList(true);
		return list
			.getList(id)
			.then(data => {
				if (data.data) setSelectedList(data.data[0]);
				if (data.error) setErrorList(true);
				setLoadingList(false);
				return data;
			})
			.catch(err => {
				setErrorList(true);
				throw err;
			});
	}, []);

	const createList = useCallback(
		newList => {
			return list.createList({ ...newList, user_id: user.id });
		},
		[user]
	);

	const updateList = useCallback((listId, newData) => {
		return list.updateList(listId, newData);
	}, []);

	const deleteList = useCallback(listId => {
		return list.deleteList(listId);
	}, []);

	const value = useMemo(
		() => ({
			lists,
			loadingLists,
			errorLists,
			selectedList,
			loadingList,
			errorList,
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
			selectedList,
			loadingList,
			errorList,
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
