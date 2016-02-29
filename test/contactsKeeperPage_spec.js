import React from 'react';
import { mount, shallow } from 'enzyme';
import ContactsKeeperPage from '../src/Pages/ContactsKeeperPage/ContactsKeeperPage';

describe('<Foo />', () => {

    it('calls componentDidMount', () => {
        const wrapper = mount(<Foo />);
        expect(Foo.prototype.componentDidMount.calledOnce).to.equal(true);
    });

});