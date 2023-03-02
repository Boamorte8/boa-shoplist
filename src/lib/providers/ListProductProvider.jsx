import { createContext, useContext, useMemo, useState } from 'react';

import * as listProduct from '../api/listProductsApi';
import { useAuth } from './AuthProvider';

const ListProductContext = createContext();
ListProductContext.displayName = 'ListProductContext';

function ListProductProvider(props) {
	const [listProducts, setListProducts] = useState(null);
	const [errorListProducts, setErrorListProducts] = useState(false);
	const [loadingListProducts, setLoadingListProducts] = useState(false);
	const { user } = useAuth();

	const getListProducts = async listId => {
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
	};

	const createListProduct = newList => {
		return listProduct.createListProduct({ ...newList, user_id: user.id });
	};

	const updateListProduct = (listId, newData) => {
		return listProduct.updateListProduct(listId, newData);
	};

	const deleteListProduct = listId => {
		return listProduct.deleteListProduct(listId);
	};

	const value = useMemo(
		() => ({
			listProducts,
			loadingListProducts,
			errorListProducts,
			setErrorListProducts,
			getListProducts,
			createListProduct,
			updateListProduct,
			deleteListProduct
		}),
		[
			listProducts,
			loadingListProducts,
			errorListProducts,
			getListProducts,
			setErrorListProducts,
			createListProduct,
			updateListProduct,
			deleteListProduct
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
