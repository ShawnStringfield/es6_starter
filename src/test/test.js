'use strict';

import {expect} from 'chai';

describe( 'Array', function() {
	it( 'Length Should Be Greater Than 0', function() {
		var arr = [1, 2, 3, 4, 5];
		expect( arr.length ).to.equal( 5 );
	});
});
