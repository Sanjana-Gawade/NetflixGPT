export const validations = (email, password) => {
    const result = {};
  
    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordValid = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password);
  
    if (!emailValid) {
      result.email = 'Enter valid email';
    }
  
    if (!passwordValid) {
      result.password = 'Password must have 1 digit, 1 uppercase, 1 lowercase, 1 special char, and be at least 8 characters';
    }
  
    return Object.keys(result).length > 0 ? result : null;
  };
  