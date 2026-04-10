import { createEvent, createStore, sample } from 'effector';
import { HeaderNavItem } from '../types';
import { routePushed } from '@models/router';
import { delay } from 'patronum/delay';

export const $isModalOpen = createStore(false);
export const openModalPressed = createEvent();
export const closeModalPressed = createEvent();
const openModal = createEvent();
const closeModal = createEvent();

export const $subItems = createStore<HeaderNavItem['items']>([]);
const changeSubItems = createEvent<HeaderNavItem['items']>();
export const resetSubItems = createEvent();
export const itemPressed = createEvent<HeaderNavItem>();

$isModalOpen.on(openModal, () => true);
$isModalOpen.on(closeModal, () => false);

$subItems.on(changeSubItems, (_, newItems) => newItems);
$subItems.on(resetSubItems, () => []);

delay({
  source: closeModalPressed,
  timeout: 1000,
  target: resetSubItems,
});

sample({
  clock: openModalPressed,
  target: openModal,
});

sample({
  clock: closeModalPressed,
  target: [closeModal],
});

sample({
  clock: itemPressed,
  filter: item => !!item.items.length,
  fn: item => item.items!,
  target: changeSubItems,
});

sample({
  clock: itemPressed,
  filter: item => !item.items.length && !!item.path,
  fn: item => item.path!,
  target: [routePushed, closeModal],
});
