const REGEX = {
	EMAIL: /^\S+@\S+\.\S+$/,
	PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/
};

export const validateEmail = email => {
	if (email.length < 5) return 'auth.errors.email.length';
	if (!REGEX.EMAIL.test(email)) return 'auth.errors.email.format';
};

export const validatePassword = password => {
	if (password.length < 10) return 'auth.errors.password.length';
	if (!REGEX.PASSWORD.test(password)) return 'auth.errors.password.format';
};

export const validateConfirmationPassword = (confirmation, password) => {
	if (confirmation !== password) return 'auth.errors.confirmPassword';
};
