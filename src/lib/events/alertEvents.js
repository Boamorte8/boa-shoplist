import { ALERT_KINDS } from '../constants/alertKinds';

const EVENT_NAME = 'alert';

const subscribe = callback => {
	const handler = ev => callback(ev.detail);
	document.addEventListener(EVENT_NAME, handler);
	return handler;
};
const unsubscribe = handler => {
	document.removeEventListener(EVENT_NAME, handler);
};

const emitEvent = (message, kind = ALERT_KINDS.SUCCESS) => {
	const event = new CustomEvent(EVENT_NAME, {
		detail: { kind, message }
	});
	document.dispatchEvent(event);
};

const success = message => {
	emitEvent(message);
};

const error = message => {
	emitEvent(message, ALERT_KINDS.ERROR);
};

export const alertBox = {
	success,
	error,
	subscribe,
	unsubscribe
};
