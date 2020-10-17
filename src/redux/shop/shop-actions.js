import ShopActionTypes from './shop-types';
import { firestore, converCollectionSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionsError = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    
    dispatch(fetchCollectionsStart());
    
    collectionRef.get().then(snapshot => {
      const collectionsmap =  converCollectionSnapshotToMap(snapshot);
      
      dispatch(fetchCollectionsSuccess(collectionsmap));
    }).catch(error => dispatch(fetchCollectionsError(error.message)) );
  }
}
