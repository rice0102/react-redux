import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts'
import { reducer as formReducer } from 'redux-form';
// rename 
const rootReducer = combineReducers({
 posts: PostsReducer,
 form: formReducer // must be form can not be anything else.
});

export default rootReducer;

