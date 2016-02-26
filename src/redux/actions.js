import FakeDatabase from '../FakeDatabase'

export const ADD_CONTACT = 'ADD_CONTACT';
export function addContact(contact) {
    return {
        type: ADD_CONTACT,
        contact
    }
}
export const CONTACT_LIST_REQUEST = 'CONTACT_LIST_REQUEST';
export function requestContacts() {
    return {
        type: CONTACT_LIST_REQUEST
    }
}

export const CONTACT_LIST_RECEIVED = 'CONTACT_LIST_RECEIVED';
export function receivedContacts(contacts) {
    return {
        type: CONTACT_LIST_RECEIVED,
        contacts
    }
}



export function fetchContacts() {
    return dispatch => {
        dispatch(requestContacts);
        return Promise.resolve(FakeDatabase)
            .then(contacts => dispatch(receivedContacts(contacts)));
    }
}