export const nullState = {
    contactsTable: {
    allContacts: [],
    filteredContacts: [],
    isFetching: false,
    didInvalidate: false,
    filter: '',
    filterQuery: '',
    modalIsOpen: false,
    contactCurrentlyEdited: {},
    columnSort: { columnIndex: null, direction: null }
    }
}
export const arrayDatabase = [ [ 'Frodo',
    'Baggins',
    '09/22/2011',
    '123456789',
    'frodo@shire.net',
    'Best friend is Samwise Gamgee.' ],
    [ 'Legolas',
        'Greenleaf',
        '10/19/2010',
        '897654321',
        'legolas@sindar.og',
        'Best friend is Gimli.' ],
    [ 'Aragorn',
        'Elssar',
        '12/20/1999',
        '7146228644',
        'aragorn@dundain.com',
        'Do not give him the ring' ] ]
export const formUpdate = {
    firstName: 'Pippin',
    lastName: 'Took',
    dob: '01/12/2011',
    email: 'pippin@gmail.com' }
export const pippinArray = [
    'Pippin',
    'Took',
    '01/12/2011',
    '',
    'pippin@gmail.com',
    ''
]