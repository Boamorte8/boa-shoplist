import { useEffect, useState } from 'react';

import { ALERT_KINDS } from '../../../lib/constants/alertKinds';
import { alertBox } from '../../../lib/events/alertEvents';
import CheckCircle from '../icons/CheckCircleIcon';
import CrossCircle from '../icons/CrossCircleIcon';

const ICONS = {
	[ALERT_KINDS.SUCCESS]: CheckCircle,
	[ALERT_KINDS.ERROR]: CrossCircle
};

const STYLES = {
	[ALERT_KINDS.SUCCESS]: 'bg-green-600',
	[ALERT_KINDS.ERROR]: 'bg-red-600'
};

export const AlertBox = () => {
	const [menuClass, setMenuClass] = useState('animate-slide-in-right');
	const alert = useAlert({ setMenuClass });
	if (!alert) return null;

	const Icon = ICONS[alert.kind];
	const className = STYLES[alert.kind];

	if (!Icon || !className) return null;

	return (
		<div
			className={`fixed right-4 top-28 flex items-center gap-3 px-10 py-5 mb-10 text-white rounded-2xl z-50 ${menuClass} ${className}`}
		>
			<Icon className='h-6 w-6' />
			<p className='leading-6 m-0'>{alert.message}</p>
		</div>
	);
};
const useAlert = ({ setMenuClass }) => {
	const [alert, setAlert] = useState();

	useEffect(() => {
		if (!alert) return;
		const timeoutIdClass = setTimeout(
			() => setMenuClass('animate-slide-out-right'),
			4500
		);
		const timeoutId = setTimeout(() => setAlert(), 5500);
		return () => {
			clearTimeout(timeoutId);
			clearTimeout(timeoutIdClass);
			setMenuClass('animate-slide-in-right');
		};
	}, [alert]);

	useEffect(() => {
		const callback = alertData => setAlert(alertData);
		const handler = alertBox.subscribe(callback);
		return () => {
			alertBox.unsubscribe(handler);
		};
	}, []);

	return alert;
};
