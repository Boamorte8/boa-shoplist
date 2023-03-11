import {
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState
} from 'react';

import * as listProduct from '../api/listProductsApi';
import { useAuth } from './AuthProvider';

const ListProductContext = createContext();
ListProductContext.displayName = 'ListProductContext';

function ListProductProvider(props) {
	const [listProducts, setListProducts] = useState(null);
	const [listProductDelete, setListProductDelete] = useState(null);
	const [listProductUpdate, setListProductUpdate] = useState(null);
	const [errorListProducts, setErrorListProducts] = useState(false);
	const [loadingListProducts, setLoadingListProducts] = useState(false);
	const { user } = useAuth();

	const getListProducts = useCallback(async listId => {
		setListProducts(null);
		setErrorListProducts(false);
		setLoadingListProducts(true);
		return listProduct
			.getListProducts(listId)
			.then(data => {
				if (data.data) setListProducts(data.data);
				if (data.error) setErrorListProducts(true);
				setLoadingListProducts(false);
				return data;
			})
			.catch(err => {
				setErrorListProducts(true);
				throw err;
			});
	}, []);

	const createListProduct = useCallback(
		newList => {
			return listProduct.createListProduct({ ...newList, user_id: user.id });
		},
		[user]
	);

	const updateListProduct = useCallback((listId, newData) => {
		return listProduct.updateListProduct(listId, newData);
	}, []);

	const deleteListProduct = useCallback(listId => {
		return listProduct.deleteListProduct(listId);
	}, []);

	const value = useMemo(
		() => ({
			listProducts,
			loadingListProducts,
			errorListProducts,
			listProductDelete,
			listProductUpdate,
			setErrorListProducts,
			getListProducts,
			createListProduct,
			updateListProduct,
			deleteListProduct,
			setListProductDelete,
			setListProductUpdate
		}),
		[
			listProducts,
			loadingListProducts,
			errorListProducts,
			listProductDelete,
			listProductUpdate,
			getListProducts,
			setErrorListProducts,
			createListProduct,
			updateListProduct,
			deleteListProduct,
			setListProductDelete,
			setListProductUpdate
		]
	);

	return <ListProductContext.Provider value={value} {...props} />;
}

const useListProduct = () => {
	const context = useContext(ListProductContext);
	if (context === undefined) {
		throw new Error(`useListProduct must be used within a ListProductProvider`);
	}
	return context;
};

export { ListProductProvider, useListProduct };
