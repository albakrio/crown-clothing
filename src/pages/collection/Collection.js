import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop-data/shopData.selectors';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './collection.scss';

const Collection = ({ collection, match }) => {
	const { title, items } = collection;
	return (
		<div className='collection'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

// ownProps gives all the collection props
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
