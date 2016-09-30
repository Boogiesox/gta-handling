import test from 'ava';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import VehicleLoader from '../../src/components/VehicleLoader';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(<VehicleLoader />);
const vehicleLoader = shallowRenderer.getRenderOutput();

test('should have a div as container', t => {
  t.is(vehicleLoader.type, 'div');
});

test('should contains an H2', t => {
  t.is(vehicleLoader.props.children[0].type, 'h2');
});

test('should have an h2 tag containing the text "VehicleLoader"', t => {
  t.is(vehicleLoader.props.children[0].props.children, 'VehicleLoader');
});
