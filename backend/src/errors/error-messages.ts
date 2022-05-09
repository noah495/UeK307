export const errorMessages = {
    fieldEmpty: 'The field \'%s\' cannot be empty.',
    phoneInvalid: 'The phone number can only contain numbers, spaces and the \'+\' character.',
    emailInvalid: 'The email address is invalid.'
}

export const getEmptyFieldMessage = (field: string) => {
    return errorMessages.fieldEmpty.replace('%s', field);
}
