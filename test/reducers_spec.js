import {expect} from 'chai';
import contactsTable from '../src/redux/reducer';
import FakeDatabase from '../src/FakeDatabase';
import * as mocks from './mocks/contactsKeeperPage_mocks';
import * as actions from '../src/redux/actions';

describe('Contacts Keeper Page Reducers', () => {
    const receivedListState = contactsTable(undefined, actions.receivedContacts(FakeDatabase))
    describe('null table state', () => {

        it('can initialize state from undefined', () => {
            const initialState = contactsTable(undefined);
            expect(initialState).to.eql(mocks.nullState);
        });

        it('returns state if given an invalid action', () => {
            const invalidActionState = contactsTable(undefined, {type:'INVALID'})
            expect(invalidActionState).to.eql(mocks.nullState);
        });

    })
    describe('populated table state', () => {

        it('updates contacts table when given json', () => {
            expect(receivedListState.contactsTable.allContacts).to.eql(mocks.arrayDatabase);
        });

        it('filters table given a query', () => {
            const filterQueryState = contactsTable(receivedListState, actions.updateFilterQuery('frodo'));
            const filteredTableState = contactsTable(filterQueryState, actions.filterTable());
            expect(filteredTableState.contactsTable.filteredContacts).to.eql([mocks.arrayDatabase[0]]);
            expect(filteredTableState.contactsTable.filterQuery).to.eql('frodo');
        });

    })
    describe('modal', () => {

        const formUpdateState = contactsTable(receivedListState, actions.updateForm('firstName', 'Samwise'));

        it('can update form in modal', () => {
            expect(formUpdateState.contactsTable.contactCurrentlyEdited.firstName).to.eql('Samwise');
        })

        describe('can add an account', () => {
            const completeForm = [['firstName','Pippin'], ['lastName', 'Took'], ['dob','01/12/2011'], ['email','pippin@gmail.com']];
            const completedFormState = completeForm.reduce((acc, curr) => {
                return contactsTable(acc, actions.updateForm(curr[0],curr[1]))
            }, formUpdateState);
            const addedContactState = contactsTable(completedFormState, actions.addContact())

            it('can fill out form', () => {
                expect(completedFormState.contactsTable.contactCurrentlyEdited).to.eql(mocks.formUpdate)
            })

            it('adding contact adds to allContacts', () => {
                expect(addedContactState.contactsTable.allContacts).to.eql([...mocks.arrayDatabase, mocks.pippinArray])
            })
            
        })
    })
})