function convertJsonToArray(tableData) {
    const headers = ['firstName', 'lastName', 'dob', 'phone', 'email', 'notes']
    const rows = tableData.map(user => headers.map(header => user[header]))
    return [...rows]
}

function contactPassesFilter(contact, filterQuery) {
    return contact.some(contactField => contactField.toLowerCase().includes(filterQuery.toLowerCase()))
}

function applySortToContacts(columnIndex, direction, contacts) {
    return contacts.sort((a,b)=> {
        let aValue = a[columnIndex], bValue = b[columnIndex];

        // Convert date strings to Date Objects
        if(columnIndex === 2){
            aValue = new Date(
                parseInt(aValue.substring(6)),
                parseInt(aValue.substring(3,5)),
                parseInt(aValue.substring(0,2)));
            bValue = new Date(
                parseInt(bValue.substring(6)),
                parseInt(bValue.substring(3,5)),
                parseInt(bValue.substring(0,2)));
        }

        if(direction === 'ascending') {
            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
        } else {
            if (aValue < bValue) return 1;
            if (aValue > bValue) return -1;
        }
        return 0;
    })
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
        columnSort: {
            columnIndex: null,
            direction: null,
        }
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

export function updateFilterQuery(state, query) {
    const contactsTable = Object.assign({}, state.contactsTable, {filterQuery: query.target.value})
    return Object.assign({}, state, {contactsTable})
}

export function filterTable(state) {
    const {allContacts, filterQuery, columnSort} = state.contactsTable
    if(filterQuery === '') {
        const contactsTable = Object.assign({}, state.contactsTable, {filter: filterQuery, filteredContacts: allContacts})
        return Object.assign({}, state, {contactsTable})
    }
    let filteredContacts = allContacts.filter(contact => contactPassesFilter(contact, filterQuery))
    if(columnSort.columnIndex) {
        const {columnIndex, direction} = columnSort
        filteredContacts = applySortToContacts(columnIndex, direction, filteredContacts)
    }
    const contactsTable = Object.assign({}, state.contactsTable, {filter: filterQuery, filteredContacts})
    return Object.assign({}, state, {contactsTable})
}

export function addContact(state) {
    const {contactCurrentlyEdited, filterQuery} = state.contactsTable;
    const newContactRowArray = convertJsonToArray([contactCurrentlyEdited]);
    const contacts = [...state.contactsTable.allContacts, ...newContactRowArray]
    if (contactPassesFilter(...newContactRowArray, filterQuery)) {
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

export function sortTable(state, columnIndex) {
    const {filteredContacts, columnSort} = state.contactsTable;
    let direction = columnSort.direction ? columnSort.direction : 'ascending';
    if (columnIndex === columnSort.columnIndex) {
        direction = columnSort.direction === 'ascending' ? 'descending' : 'ascending';
    } else {
        direction = 'ascending';
    }
    const sortedFilteredContacts = applySortToContacts(columnIndex, direction, filteredContacts)
    const contactsTable = Object.assign({}, state.contactsTable, {
        filteredContacts: sortedFilteredContacts,
        columnSort: {
            columnIndex,
            direction,
        }
    })
    return Object.assign({}, state, {contactsTable})
}

export function closeModal(state) {
    const contactsTable = Object.assign({}, state.contactsTable, {
        modalIsOpen: false,
        contactCurrentlyEdited: {}
    })
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
        'SORT_TABLE': () => sortTable(state, action.columnIndex),
        'DEFAULT': () => state,
    };
    return (actions[action.type] || actions['DEFAULT'])()
};