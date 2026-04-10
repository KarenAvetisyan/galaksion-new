import { createEvent, createStore, sample } from 'effector';
import { persist } from 'effector-storage/local';

export const $username = createStore<string>('');
export const $isOpenModal = createStore(false);

export const usernameSubmitted = createEvent();
export const usernameChanged = createEvent<string>();
export const modalOpenned = createEvent();
const modalClosed = createEvent();

$username.on(usernameChanged, (_, newValue) => newValue);

$isOpenModal.on(modalOpenned, () => true);
$isOpenModal.on(modalClosed, () => false);

sample({
  clock: usernameSubmitted,
  // filter: $username.map((val) => val).,
  target: modalClosed,
});

persist({
  store: $username,
  key: 'username',
  def: '',
});
