import { createSelector } from 'reselect';

const selectShopData = (state) => state.shopData;

export const selectCollections = createSelector(
	[selectShopData],
	(shopData) => shopData.collections
);

export const selectCollectionForPreview = createSelector(
	[selectCollections],
	// transforming object into array
	(collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
	createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	);
