function convertJsonToArray(tableData) {
    console.log('table', tableData)
    const headers = ['firstName', 'lastName', 'dob', 'phone', 'email', 'notes']
    const rows = tableData.map(user => headers.map(header => user[header]))
    return [...rows]
}

export const initialState = {
    contactsTable: {
        allContacts: [],
        filteredContacts: [],
        isFetching: false,
        didInvalidate: false,
        filter: '',
        filterQuery: '',
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
            allContacts: convertJsonToArray(contacts),
            filteredContacts: convertJsonToArray(contacts),
            isFetching: false,
            didInvalidate: false,
        })
    return Object.assign({}, state, {contactsTable})
}

export function checkContactAgainstFilter(contact, filterQuery) {
    return contact.some(contactField => contactField.toLowerCase() === filterQuery.toLowerCase())
}

export function updateFilterQuery(state, query) {
    const contactsTable = Object.assign({}, state.contactsTable, {filterQuery: query.target.value})
    return Object.assign({}, state, {contactsTable})
}

export function filterTable(state) {
    const {allContacts, filterQuery} = state.contactsTable
    if(filterQuery === '') {
        const contactsTable = Object.assign({}, state.contactsTable, {filter: filterQuery, filteredContacts: allContacts})
        return Object.assign({}, state, {contactsTable})
    }
    const filteredContacts = allContacts.filter(contact => checkContactAgainstFilter(contact, filterQuery))
    const contactsTable = Object.assign({}, state.contactsTable, {filter: filterQuery, filteredContacts})
    return Object.assign({}, state, {contactsTable})
}

export function addContact(state, contact) {
    console.log('onctact', contact)
    console.log('json', convertJsonToArray([contact]))
    //console.log('contacts', state.contactsTable.contacts)
    const contacts = [...state.contactsTable.allContacts, ...convertJsonToArray([contact])]

    const contactsTable = Object.assign({}, state.contactsTable, {contacts})
    return Object.assign({}, state, {contactsTable})
}

export default function contactsTable(state = initialState, action) {
    const actions = {
        'ADD_CONTACT': () => addContact(state, action.contact),
        'CONTACT_LIST_RECEIVED': () => receivedContacts(state, action.contacts),
        'FILTER_TABLE': () => filterTable(state),
        'UPDATE_FILTER_QUERY': () => updateFilterQuery(state, action.query),
        'DEFAULT': () => state
    };
    return (actions[action.type] || actions['DEFAULT'])()
};