import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopDataReducer from './shop-data/shopData.reducer';
import { persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart'], // I did not add the user reducer because firebase persist the user data
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shopData: shopDataReducer,
});

export default persistReducer(persistConfig, rootReducer);
