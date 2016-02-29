import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import {ContactsKeeperPage} from '../src/Pages/ContactsKeeperPage/ContactsKeeperPage';
import Table from '../src/Components/Table/Table.component';
import TableRow from '../src/Components/Table/TableRow.component';
import TableHeader from '../src/Components/Table/TableHeader.component';
import {filledOutState} from './mocks/contactsKeeperPage_mocks';
import sinon from 'sinon';

const addContact = sinon.spy(), updateFilterQuery = sinon.spy(), updateForm = sinon.spy(), filterTable = sinon.spy(),
    openModal = sinon.spy(), closeModal = sinon.spy(), sortTable = sinon.spy(), fetchContacts = sinon.spy();

const actions = {
    addContact,
    updateFilterQuery,
    updateForm,
    filterTable,
    openModal,
    closeModal,
    sortTable,
    fetchContacts
}

describe('<ContactsKeeperPage />', () => {

    describe('<ContactsKeeperPage/> full DOM render', () => {
        const wrapper = mount(
            <ContactsKeeperPage
                contactsTable={filledOutState.contactsTable}
                actions={actions}/>);

        it('called fetchContacts on componentDidMount', () => {
            expect(fetchContacts.calledOnce).to.equal(true);
        });

        it('Modal opens when the Add Button is clicked', () => {
            wrapper.find('#AddButton').simulate('click');
            expect(openModal.calledOnce).to.equal(true);
        });
    })

    describe('<Table/> shallow render', () => {
        const {filteredContacts, columnSort} = filledOutState.contactsTable;
        const TableMounted = shallow(
            <Table
                headers={['First Name', 'Last Name', 'Date of Birth', 'Phone', 'Email', 'Notes']}
                rows={filteredContacts}
                sortTable={actions.sortTable}
                columnSort={columnSort}
            />
        )
        it('has tables headers', () => {
            expect(TableMounted.find(TableHeader)).to.have.length(1)
        })

        it('has tables rows', () => {
            expect(TableMounted.find(TableRow)).to.have.length(3)
        })
    })
});