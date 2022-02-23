import {writable} from 'svelte/store'

export const contacts = writable([]);

export const addContact = (email, msg) => {
    contacts.update( (cur) => {
        const newContacts = [... cur, {email, msg, id: Date.now()}];
        return newContacts;
    });
}

export const deleteContact = (id) => {
    contacts.update(contacts => contacts.filter(contact => contact.id !== id));
}