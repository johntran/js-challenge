import FakeDatabase from '../FakeDatabase'

export const ADD_CONTACT = 'ADD_CONTACT';
export function addContact() {
    return {
        type: ADD_CONTACT,
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

export const FILTER_TABLE = 'FILTER_TABLE';
export function filterTable() {
    return {
        type: FILTER_TABLE,
    }
}

export const UPDATE_FILTER_QUERY = 'UPDATE_FILTER_QUERY';
export function updateFilterQuery(query) {
    return {
        type: UPDATE_FILTER_QUERY,
        query
    }
}

export const OPEN_MODAL = 'OPEN_MODAL';
export function openModal() {
    return {
        type: OPEN_MODAL
    }
}

export const CLOSE_MODAL = 'CLOSE_MODAL';
export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export const UPDATE_FORM = 'UPDATE_FORM';
export function updateForm(property, event) {
    return {
        type: UPDATE_FORM,
        property,
        event,
    }
}

export const SORT_TABLE = 'SORT_TABLE';
export function sortTable(columnIndex) {
    return {
        type: SORT_TABLE,
        columnIndex
    }
}

export function fetchContacts() {
    return dispatch => {
        dispatch(requestContacts);
        return Promise.resolve(FakeDatabase)
            .then(contacts => dispatch(receivedContacts(contacts)));
    }
}