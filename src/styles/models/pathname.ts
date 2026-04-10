import { createEvent, createStore } from 'effector';

const pathnameChanged = createEvent<string>();
const $pathname = createStore<string>('');

$pathname.on(pathnameChanged, (_, pathname) => pathname);

export { $pathname, pathnameChanged };
