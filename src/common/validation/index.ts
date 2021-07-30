export const generateValidationErrorMessage = (field: string, message: string) => {
  return {
    field,
    message,
  };
};

export const generateValidationError = (field: string, message: string) => {
  return {
    message: 'Invalid Data',
    errors: [generateValidationErrorMessage(field, message)],
  };
};

export const generateNestedValidationError = (errors) => {
  return {
    message: 'Invalid Data',
    errors,
  };
};
