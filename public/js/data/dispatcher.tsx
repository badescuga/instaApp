import flux = require('flux');

interface CardAction {
  actionType: number;
  id?: string;
}

var AppDispatcher: flux.Dispatcher<CardAction> = new flux.Dispatcher();

export { AppDispatcher, CardAction }