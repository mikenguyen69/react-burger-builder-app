import React from 'react';
import {expect, assert} from 'chai';
import {shallow, mount, configure, render} from 'enzyme';
import Logo from './Logo';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter() });
global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;

describe('Logo Test', () => {
    let logo = shallow(<Logo />);

    it('should contain div and className=Logo', () => {
        expect(logo.find('div')).to.have.length(1);
    });

    it('should contain img', () => {
        expect(logo.find('img')).to.have.length(1);
    });
});