const BaseCard = ({ classes, ...props }) => {
	return (
		<div
			className={`p-4 rounded-lg shadow-md shadow-primary-300 flex items-center ${classes}`}
			{...props}
		/>
	);
};

export default BaseCard;
