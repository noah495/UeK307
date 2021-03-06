import {Ticket} from "../../models/ticket.model";
import {errorMessages, getEmptyFieldMessage} from "../../errors/error-messages";

export class ValidationService {

    public static validateTicket(ticket: Ticket): string[] {
        const errors: string[] = [];
        if (!this.validateStringNotEmpty(ticket.firstName)) errors.push(getEmptyFieldMessage('First Name'));
        if (!this.validateStringNotEmpty(ticket.lastName)) errors.push(getEmptyFieldMessage('Last Name'));
        if (!this.validateStringNotEmpty(ticket.email)) errors.push(getEmptyFieldMessage('Email'));
        if (!this.validateStringNotEmpty(ticket.status)) errors.push(getEmptyFieldMessage('Status'));
        if (this.validateStringNotEmpty(ticket.email) && !this.validateEmail(ticket.email)) errors.push(errorMessages.emailInvalid);
        if (ticket.phoneNr) {
            if (!this.validatePhoneNumber(ticket.phoneNr)) errors.push(errorMessages.phoneInvalid)
        }
        return errors;
    }

    private static validateStringNotEmpty(value: string): boolean {
        return value.length >= 1
    }

    private static validatePhoneNumber(phoneNr: string): boolean {
        for (let char of phoneNr) {
            if (isNaN(Number(char)) && char !== ' ' && char !== '+')
                return false;
        }
        return true;
    }

    private static validateEmail(email: string): boolean {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(email);
    }
}
