import { createContext, useContext, useMemo, useState } from 'react';

import * as product from '../api/productsApi';
import { useAuth } from './AuthProvider';

const ProductContext = createContext();
ProductContext.displayName = 'ProductContext';

function ProductProvider(props) {
	const [products, setProducts] = useState(null);
	const [loadingProducts, setLoadingProducts] = useState(false);
	const [error, setError] = useState(false);
	const { user } = useAuth();

	const getProducts = async () => {
		setError(false);
		setLoadingProducts(true);
		return product
			.getProducts()
			.then(data => {
				if (data.data) setProducts(data.data);
				setLoadingProducts(false);
				return data;
			})
			.catch(err => {
				setError(true);
				throw err;
			});
	};

	const createProduct = newProduct => {
		return product.createProduct({ ...newProduct, user_id: user.id });
	};

	const updateProduct = (productId, newData) => {
		return product.updateProduct(productId, newData);
	};

	const deleteProduct = productId => {
		return product.deleteProduct(productId);
	};

	const value = useMemo(
		() => ({
			products,
			loadingProducts,
			error,
			setError,
			getProducts,
			createProduct,
			updateProduct,
			deleteProduct
		}),
		[
			products,
			loadingProducts,
			error,
			setError,
			getProducts,
			createProduct,
			updateProduct,
			deleteProduct
		]
	);

	return <ProductContext.Provider value={value} {...props} />;
}

const useProduct = () => {
	const context = useContext(ProductContext);
	if (context === undefined) {
		throw new Error(`useProduct must be used within a ProductProvider`);
	}
	return context;
};

export { ProductProvider, useProduct };
