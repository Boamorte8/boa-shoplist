import { createContext, useContext, useMemo, useState } from 'react';

import * as unit from '../api/unitsApi';
import { useAuth } from './AuthProvider';

const UnitContext = createContext();
UnitContext.displayName = 'UnitContext';

function UnitProvider(props) {
	const [units, setUnits] = useState(null);
	const [loadingUnits, setLoadingUnits] = useState(false);
	const { user } = useAuth();

	const getUnits = async () => {
		setLoadingUnits(true);
		return unit.getUnits().then(data => {
			if (data.data) setUnits(data.data);
			setLoadingUnits(false);
			return data;
		});
	};

	const createUnit = newUnit => {
		return unit.createUnit({ ...newUnit, user_id: user.id });
	};

	const updateUnit = (unitId, newData) => {
		return unit.updateUnit(unitId, newData);
	};

	const deleteUnit = unitId => {
		return unit.deleteUnit(unitId);
	};

	const value = useMemo(
		() => ({
			units,
			loadingUnits,
			getUnits,
			createUnit,
			updateUnit,
			deleteUnit
		}),
		[units, loadingUnits, getUnits, createUnit, updateUnit, deleteUnit]
	);

	return <UnitContext.Provider value={value} {...props} />;
}

const useUnit = () => {
	const context = useContext(UnitContext);
	if (context === undefined) {
		throw new Error(`useUnit must be used within a UnitProvider`);
	}
	return context;
};

export { UnitProvider, useUnit };
