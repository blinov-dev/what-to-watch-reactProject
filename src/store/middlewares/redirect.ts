import browserHistory from '../../components/browser-history';
import { Middleware } from 'redux';
import { updateStore } from '../reducer';
import { Action } from '../action';
type Reducer = ReturnType<typeof updateStore>;

// Определите тип для вашего action
interface RedirectAction {
  type: 'REDIRECT_TO_ROUTE';
  payload: string; // или другой тип, если ваш payload имеет другой тип
}

export const redirect: Middleware<unknown, Reducer> =
  (_store) => (next) => (action: RedirectAction) => {
    if (action.type === Action.REDIRECT_TO_ROUTE) {
      browserHistory.push(action.payload);
    }
    return next(action);
  };
