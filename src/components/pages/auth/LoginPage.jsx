import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import { alertBox } from '../../../lib/events/alertEvents';
import {
	emailChangedLoginForm,
	passwordChangedLoginForm
} from '../../../lib/actions/loginFormActions';
import { useLoginForm } from '../../../lib/hooks/useLoginForm';
import { useAuth } from '../../../lib/providers/auth-provider';
import BaseCard from '../../atoms/BaseCard';
import Button from '../../atoms/buttons/Button';
import ButtonLink from '../../atoms/buttons/ButtonLink';
import BaseInput from '../../atoms/forms/BaseInput';
import Spinner from '../../atoms/Spinner';

const LoginPage = () => {
	const { t } = useTranslation();
	const [searchParams] = useSearchParams();
	const location = useLocation();
	const { login } = useAuth();
	const navigate = useNavigate();
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
		<div className='min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-6rem)] w-full bg-background p-2 md:p-6 lg:p-10'>
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
							navigate
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
						type='submit'
					>
						{isSubmitting ? <Spinner className='h-5 w-5' /> : loginText}
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
	navigate
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
		navigate('/list');
	} else {
		alertBox.error(t('auth.errors.login'));
	}
	setIsSubmitting(false);
};

export default LoginPage;
