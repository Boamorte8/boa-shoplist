import { alertBox } from '@lib/events/alertEvents';

export function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export async function handleSubmitBase(
	ev,
	getInfo,
	setIsSubmitting,
	messageSuccess,
	messageError,
	onSuccess
) {
	ev.preventDefault();

	setIsSubmitting(true);

	const { error } = await getInfo();

	if (!error) {
		alertBox.success(messageSuccess);
		onSuccess();
	} else {
		alertBox.error(messageError);
	}
	setIsSubmitting(false);
}
