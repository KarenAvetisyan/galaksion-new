import { createEvent, createStore, sample } from 'effector';
import { delay } from 'patronum/delay';

// modal state
export const $isOpenModal = createStore(false);
export const modalOpenned = createEvent();
export const modalClosed = createEvent();

// isSuccess
export const $isSuccess = createStore(false);
export const successed = createEvent();
export const reset = createEvent();

$isOpenModal.on(modalOpenned, () => true);
$isOpenModal.on(modalClosed, () => false);

$isSuccess.on(successed, () => true);
$isSuccess.on(reset, () => false);

delay({
  source: successed,
  timeout: 3000,
  target: modalClosed,
});

delay({
  source: modalClosed,
  timeout: 1000,
  target: reset,
});
