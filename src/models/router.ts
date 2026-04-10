import { attach, createEvent, createStore, sample } from "effector";
import {
  AppRouterInstance,
  NavigateOptions,
} from "next/dist/shared/lib/app-router-context.shared-runtime";
import { $pathname } from "./pathname";

interface SetSearchParamsEvent extends NavigateOptions {
  params: URLSearchParams | string;
}

const attachRouterEv = createEvent<AppRouterInstance | null>();
const $router = createStore<AppRouterInstance | null>(null);

$router.on(attachRouterEv, (_, router) => router);

const routePushed = createEvent<string>();
const replaceRoute = createEvent<string>();
const searchParamsChanged = createEvent<SetSearchParamsEvent>();

const pushRouteFx = attach({
  source: $router,
  effect: (router, param) => {
    return router && router.push(param.toString());
  },
});

const replaceRouteFx = attach({
  source: $router,
  effect: (router, param) => {
    return router && router.replace(param.toString());
  },
});

export const setSearchParamsFx = attach({
  source: [$router, $pathname],
  effect: ([router, pathname], { params, ...options }: SetSearchParamsEvent) =>
    router && router.push(`${pathname}?${params.toString()}`, options),
});

sample({
  clock: routePushed,
  target: pushRouteFx,
});

sample({
  clock: replaceRoute,
  target: replaceRouteFx,
});

sample({
  clock: searchParamsChanged,
  target: setSearchParamsFx,
});

export {
  $router,
  attachRouterEv,
  pushRouteFx,
  searchParamsChanged,
  routePushed,
  replaceRoute,
};
