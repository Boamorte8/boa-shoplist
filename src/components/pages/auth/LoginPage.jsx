import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useSearchParams } from 'react-router-dom';

import { alertBox } from '../../../lib/events/alertEvents';
import { BaseCard } from '../../atoms/BaseCard';
import { BaseInput } from '../../atoms/forms/BaseInput';
import Button from '../../atoms/buttons/Button';
import { ButtonLink } from '../../atoms/buttons/ButtonLink';
import {
	emailChangedLoginForm,
	passwordChangedLoginForm
} from '../../../lib/actions/loginFormActions';
import { useAuth } from '../../../lib/providers/AuthProvider';
import { useList } from '../../../lib/providers/ListProvider';
import { useLoginForm } from '../../../lib/hooks/useLoginForm';

export const LoginPage = () => {
	const { t } = useTranslation();
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const { login } = useAuth();
	const { getLists } = useList();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const { email, password, isFormInvalid, dispatchLoginForm } = useLoginForm();
	const emailText = t('email');
	const passwordText = t('password');
	const loginText = t('login');

	useEffect(() => {
		if (searchParams.has('source') && searchParams.get('source') === 'email') {
			const params = new URLSearchParams(location.hash);
			if (params.has('error_code')) {
				alertBox.error(t('auth.confirmRegister.messages.error'));
			} else {
				alertBox.success(t('auth.confirmRegister.messages.success'));
			}
		}
	}, []);

	return (
		<div className='min-h-[calc(100vh-8.5rem)] md:min-h-[calc(100vh-7.5rem)] lg:min-h-[calc(100vh-9.5rem)] w-full bg-background p-2 md:p-6 lg:p-10'>
			<BaseCard classes='max-w-2xl mx-auto'>
				<form
					className='w-full flex flex-col gap-2 items-center p-4'
					onSubmit={ev =>
						handleSubmit(
							ev,
							email,
							password,
							setIsSubmitting,
							login,
							t,
							getLists
						)
					}
				>
					<h1 className='dark:text-white font-bold text-xl mb-4'>
						{loginText}
					</h1>

					<div className='w-fit grid gap-4'>
						<BaseInput
							id='email'
							type='email'
							name='email'
							className='max-w-xs'
							label={emailText}
							placeholder={emailText}
							error={email.error && t(email.error)}
							value={email.value}
							onChange={ev =>
								dispatchLoginForm(emailChangedLoginForm(ev.target.value))
							}
						/>

						<BaseInput
							id='password'
							type='password'
							name='password'
							className='max-w-xs'
							label={passwordText}
							placeholder={passwordText}
							error={password.error && t(password.error)}
							value={password.value}
							onChange={ev =>
								dispatchLoginForm(passwordChangedLoginForm(ev.target.value))
							}
						/>
					</div>

					<Button
						className='mt-6 mb-2'
						disabled={isFormInvalid || isSubmitting}
						loading={isSubmitting}
						type='submit'
					>
						{loginText}
					</Button>

					<ButtonLink to='/register'>{t('auth.goRegister')}</ButtonLink>
				</form>
			</BaseCard>
		</div>
	);
};

const handleSubmit = async (
	ev,
	email,
	password,
	setIsSubmitting,
	login,
	t,
	getLists
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const user = {
		email: email.value,
		password: password.value
	};

	const { error } = await login(user);

	if (!error) {
		alertBox.success(t('auth.loginSuccess'));
		getLists();
	} else {
		alertBox.error(t('auth.errors.login'));
	}
	setIsSubmitting(false);
};
