function convertJsonToArray(tableData) {
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
        modalIsOpen: false,
        contactCurrentlyEdited: {},
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

export function contactPassesFilter(contact, filterQuery) {
    return contact.some(contactField => contactField.toLowerCase().includes(filterQuery.toLowerCase()))
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
    const filteredContacts = allContacts.filter(contact => contactPassesFilter(contact, filterQuery))
    const contactsTable = Object.assign({}, state.contactsTable, {filter: filterQuery, filteredContacts})
    return Object.assign({}, state, {contactsTable})
}

export function addContact(state) {
    const {contactCurrentlyEdited, filterQuery} = state.contactsTable;
    const newContactRowArray = convertJsonToArray([contactCurrentlyEdited]);
    const contacts = [...state.contactsTable.allContacts, ...newContactRowArray]
    if(contactPassesFilter(...newContactRowArray, filterQuery)) {
        const filteredContacts = [...state.contactsTable.filteredContacts, ...newContactRowArray]
        const contactsTable = Object.assign({}, state.contactsTable, {contacts, filteredContacts})
        return Object.assign({}, state, {contactsTable})
    }
    const contactsTable = Object.assign({}, state.contactsTable, {contacts});
    return Object.assign({}, state, {contactsTable})
}

export function openModal(state) {
    const contactsTable = Object.assign({}, state.contactsTable, {modalIsOpen: true})
    return Object.assign({}, state, {contactsTable})
}

export function updateForm(state, property, event) {
    const {contactCurrentlyEdited} = state.contactsTable;
    const contactsTable = Object.assign({}, state.contactsTable, {
        contactCurrentlyEdited: Object.assign({},
            contactCurrentlyEdited,
            {[`${property}`]: event.target.value})
    })
    return Object.assign({}, state, {contactsTable})
}

export function closeModal(state) {
    const contactsTable = Object.assign({}, state.contactsTable, {modalIsOpen: false})
    return Object.assign({}, state, {contactsTable})
}

export default function contactsTable(state = initialState, action) {
    const actions = {
        'ADD_CONTACT': () => addContact(state),
        'CONTACT_LIST_RECEIVED': () => receivedContacts(state, action.contacts),
        'FILTER_TABLE': () => filterTable(state),
        'UPDATE_FILTER_QUERY': () => updateFilterQuery(state, action.query),
        'OPEN_MODAL': () => openModal(state),
        'CLOSE_MODAL': () => closeModal(state),
        'UPDATE_FORM': () => updateForm(state, action.property, action.event),
        'DEFAULT': () => state,
    };
    return (actions[action.type] || actions['DEFAULT'])()
};