import { createEvent, createStore } from 'effector';

const $isOpenModal = createStore<boolean>(false);
const modalOpened = createEvent();
const modalClosed = createEvent();

$isOpenModal.on(modalOpened, () => true);
$isOpenModal.on(modalClosed, () => false);

export { $isOpenModal, modalOpened, modalClosed };
