import { createSelector } from 'reselect';
import { ActionReducerMap } from '@ngrx/store';
import sortBy from 'lodash-es/sortBy';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
// import * as fromRouter from '@ngrx/router-store';


/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  // router: fromRouter.RouterReducerState;

}


/**
 * Because metareducers take a reducer function and return a new reducer,
 * we can use our compose helper to chain them together. Here we are
 * using combineReducers to make our top level reducer, and then
 * wrapping that in storeLogger. Remember that compose applies
 * the result from right to left.
 */
export const reducers: ActionReducerMap<State> = {
  // router: fromRouter.routerReducer,

};

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `books` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 * 	constructor(store: Observable<State>) {
 * 	  this.booksState$ = store.select(getBooksState);
 * 	}
 * }
 * ```
 */

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them useable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function from the reselect library creates
 * very efficient selectors that are memoized and only recompute when arguments change.
 * The created selectors can also be composed together to select different
 * pieces of state.
 */

/**
 * Layout Reducers
 * @param state
 */


/**
 * Sidenav Reducers
 * @param state
 */

/**
 * Inbox Reducers
 * @param state
 */





