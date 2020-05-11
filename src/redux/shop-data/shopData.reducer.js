import shopData from '../../pages/shop/shopData';

const INITIAL_STATE = {
	collections: shopData,
};

const shopDataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default shopDataReducer