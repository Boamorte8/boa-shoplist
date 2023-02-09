export const BaseCard = ({ classes, component: Component, ...props }) => {
	if (Component)
		return (
			<Component
				className={`p-4 rounded-lg shadow-md shadow-primary-300 flex items-center ${classes}`}
				{...props}
			/>
		);
	return (
		<div
			className={`p-4 rounded-lg shadow-md shadow-primary-300 flex items-center ${classes}`}
			{...props}
		/>
	);
};
