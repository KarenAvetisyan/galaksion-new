import { GetBlogPostsParams } from "@features/blog/types";
import { searchParamsChanged } from "@models/router";
import { createEvent, createStore, sample } from "effector";
import { ChangeMethod, persist } from "effector-storage/query";
import { blogSearchMobileClosed } from "@features/blog/components/blog-search-mobile";

const setParamsWithoutScroll: ChangeMethod = (params) => {
  searchParamsChanged({
    params,
    scroll: false,
  });
};

export const $page = createStore<number>(0);
export const $tag = createStore<string | null>(null);
export const $sortField =
  createStore<GetBlogPostsParams["sortField"]>("publishedAt");
export const $direction = createStore<GetBlogPostsParams["direction"]>("DESC");
export const $limit = createStore<number>(6);
export const $offset = createStore<number>(0);
export const $search = createStore<string | null>(null);

export const searchChanged = createEvent<string>();
export const pageChanged = createEvent<number>();
export const tagChanged = createEvent<string | null>();
export const sortFieldChanged = createEvent<GetBlogPostsParams["sortField"]>();
export const directionChanged = createEvent<GetBlogPostsParams["direction"]>();
export const limitChanged = createEvent<number>();
export const offsetChanged = createEvent<number>();

$page.on(pageChanged, (_, page) => page);
$search.on(searchChanged, (_, search) => {
  if (search.length === 0) {
    return null;
  }

  return search;
});
$tag.on(tagChanged, (_, tag) => tag);
$sortField.on(sortFieldChanged, (_, sortField) => sortField);
$direction.on(directionChanged, (_, direction) => direction);
$limit.on(limitChanged, (_, limit) => limit);
$offset.on(offsetChanged, (_, offset) => offset);

persist({
  store: $page,
  key: "page",
  serialize: (tag) => (tag ? String(tag) : ""),
  deserialize: (tag) => Number(tag),
  method: setParamsWithoutScroll,
});

persist({
  store: $tag,
  key: "tag",
  method: setParamsWithoutScroll,
});

persist({
  store: $sortField,
  key: "sortField",
  method: setParamsWithoutScroll,
  def: "publishedAt",
});

persist({
  store: $direction,
  key: "direction",
  method: setParamsWithoutScroll,
  def: "DESC",
});

persist({
  store: $limit,
  key: "limit",
  method: setParamsWithoutScroll,
  def: 6,
});

persist({
  store: $offset,
  key: "offset",
  method: setParamsWithoutScroll,
  def: 0,
});

persist({
  store: $search,
  key: "search",
  method: setParamsWithoutScroll,
});

sample({
  clock: blogSearchMobileClosed,
  fn: () => "",
  target: searchChanged,
});
