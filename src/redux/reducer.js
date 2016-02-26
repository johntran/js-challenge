export const initialState = {
    contactsTable: {
        contacts: [],
        isFetching: false,
        didInvalidate: false,
    },
};

export function requestContacts(state, contacts) {
    const contactsTable = Object.assign({}, state.contactsTable,
        {
            isFetching: true,
            didInvalidate: false,
        })
    return Object.assign({}, state, {contactsTable})
}

export function receivedContacts(state) {
    const contactsTable = Object.assign({}, state.contactsTable,
        {
            isFetching: false,
            didInvalidate: false,
        })
    return Object.assign({}, state, {contactsTable})
}

export function addContact(state, contact) {
    const contacts = [...state.contactsTable.contacts, contact]
    const contactsTable = Object.assign({}, state.contactsTable, {contacts})
    return Object.assign({}, state, {contactsTable})
}



export default function contactsTable(state = initialState, action) {
    const actions = {
        'ADD_CONTACT': () => addContact(state, action.contact),
        'CONTACT_LIST_RECEIVED': () => receivedContacts(state, action.contacts),
        'DEFAULT': () => state
    };
    return (actions[action.type] || actions['DEFAULT'])()
};