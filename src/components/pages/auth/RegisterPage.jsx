import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { alertBox } from '../../../lib/events/alertEvents';
import BaseCard from '../../atoms/BaseCard';
import BaseInput from '../../atoms/forms/BaseInput';
import Button from '../../atoms/buttons/Button';
import ButtonLink from '../../atoms/buttons/ButtonLink';
import {
	confirmPasswordChangedRegisterForm,
	emailChangedRegisterForm,
	passwordChangedRegisterForm
} from '../../../lib/actions/registerFormActions';
import Spinner from '../../atoms/Spinner';
import { useAuth } from '../../../lib/providers/AuthProvider';
import { useRegisterForm } from '../../../lib/hooks/useRegisterForm';

export const RegisterPage = () => {
	const { register } = useAuth();
	const navigate = useNavigate();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const {
		email,
		password,
		confirmPassword,
		isFormInvalid,
		dispatchRegisterForm
	} = useRegisterForm();
	const { t } = useTranslation();
	const emailText = t('email');
	const passwordText = t('password');
	const registerText = t('register');
	const confirmPasswordText = t('auth.confirmPassword');
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
							register,
							t,
							navigate
						)
					}
				>
					<h1 className='dark:text-white font-bold text-xl mb-4'>
						{registerText}
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
								dispatchRegisterForm(emailChangedRegisterForm(ev.target.value))
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
								dispatchRegisterForm(
									passwordChangedRegisterForm(ev.target.value)
								)
							}
						/>

						<BaseInput
							id='confirmPassword'
							type='password'
							name='confirmPassword'
							className='max-w-xs'
							label={confirmPasswordText}
							placeholder={confirmPasswordText}
							error={confirmPassword.error && t(confirmPassword.error)}
							value={confirmPassword.value}
							onChange={ev =>
								dispatchRegisterForm(
									confirmPasswordChangedRegisterForm(ev.target.value)
								)
							}
						/>
					</div>

					<Button
						className='mt-6 mb-2'
						disabled={isFormInvalid || isSubmitting}
						type='submit'
					>
						{isSubmitting ? <Spinner className='h-5 w-5' /> : registerText}
					</Button>

					<ButtonLink to='/login'>{t('auth.goLogin')}</ButtonLink>
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
	register,
	t,
	navigate
) => {
	ev.preventDefault();

	setIsSubmitting(true);

	const user = {
		email: email.value,
		password: password.value
	};

	const { error } = await register(user);

	if (!error) {
		alertBox.success(t('auth.checkEmail'));
		navigate('/login');
	} else {
		alertBox.error(t('auth.errors.register'));
	}
	setIsSubmitting(false);
};
