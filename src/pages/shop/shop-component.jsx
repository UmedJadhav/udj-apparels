import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionPage from '../collections/collections-component';

import { createStructuredSelector } from 'reselect'; 
import { fetchCollectionStartAsync } from '../../redux/shop/shop-actions'
import CollectionsOverview from '../../components/collections-overview/collections-overview-component';
import WithSpinner from '../../components/with-spinner/with-spinner-component';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop-selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{   
  componentDidMount() {
      const { fetchCollectionStartAsync } = this.props;
      fetchCollectionStartAsync();
  }

  render(){
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    return (<div className='shop-page'>
      <Route exact path={`${match.path}`} render={ (props) => <CollectionOverviewWithSpinner isLoading={ isCollectionFetching  } {...props} />}/>
      <Route path={`${match.path}/:collectionId`} render = { (props) => <CollectionPageWithSpinner isLoading={ !isCollectionsLoaded } {...props} /> } />
    </div>)
  };

}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching : selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
});


const mapDispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
