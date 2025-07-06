// formValidator.js
// Simple form validation utility
// For educational purposes only

const FormValidator = {
  isEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  isNotEmpty(value) {
    return value != null && value.trim() !== '';
  },

  isMinLength(value, minLength) {
    return typeof value === 'string' && value.length >= minLength;
  },

  validateField(value, rules = {}) {
    if (rules.required && !FormValidator.isNotEmpty(value)) {
      return { valid: false, error: 'Field is required.' };
    }
    if (rules.email && !FormValidator.isEmail(value)) {
      return { valid: false, error: 'Invalid email address.' };
    }
    if (rules.minLength && !FormValidator.isMinLength(value, rules.minLength)) {
      return { valid: false, error: `Minimum length is ${rules.minLength}.` };
    }
    return { valid: true };
  }
};

// Example usage:
// const result = FormValidator.validateField('test@example.com', { required: true, email: true });
// if (!result.valid) console.error(result.error);

export default FormValidator;
