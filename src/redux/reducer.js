function convertJsonToArray(tableData) {
    const headers = ['firstName', 'lastName', 'dob', 'phone', 'email', 'notes']
    const rows = tableData.map(user => headers.map(header => user[header]))
    return [...rows]
}

export const initialState = {
    contactsTable: {
        contacts: [],
        isFetching: false,
        didInvalidate: false,
        filter: '',
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

export function receivedContacts(state, contacts) {
    const contactsTable = Object.assign({}, state.contactsTable,
        {
            contacts: convertJsonToArray(contacts),
            isFetching: false,
            didInvalidate: false,
        })
    return Object.assign({}, state, {contactsTable})
}

export function updateFilter(state, query) {
    const contactsTable = Object.assign({}, state.contactsTable, {filter: query})
    return Object.assign({}, state, {contactsTable})
}

export function addContact(state, contact) {
    const contacts = [...state.contactsTable.contacts, ...convertJsonToArray([contact])]
    const contactsTable = Object.assign({}, state.contactsTable, {contacts})
    return Object.assign({}, state, {contactsTable})
}

export default function contactsTable(state = initialState, action) {
    const actions = {
        'ADD_CONTACT': () => addContact(state, action.contact),
        'CONTACT_LIST_RECEIVED': () => receivedContacts(state, action.contacts),
        'UPDATE_FILTER': () => updateFilter(state, action.query),
        'DEFAULT': () => state
    };
    return (actions[action.type] || actions['DEFAULT'])()
};