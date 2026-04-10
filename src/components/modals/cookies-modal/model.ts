import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

const $showed = createStore(false);
const acceptEv = createEvent();
const declineEv = createEvent();

$showed.on([acceptEv, declineEv], () => true);

const $acceptCookies = createStore(false);

$acceptCookies.on(acceptEv, () => true);
$acceptCookies.on(declineEv, () => false);

persist({
  store: $showed,
  key: 'showedCookiesModal',
  def: false,
});

persist({
  store: $acceptCookies,
  key: 'acceptCookies',
});

export { $showed, acceptEv, declineEv };
