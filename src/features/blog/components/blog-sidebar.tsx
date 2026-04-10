"use client";

import { Headline } from "@components/typography";
import { Fragment } from "react";
import { BlogPopularPostList } from "./blog-popular-post-list";
import { SearchInput } from "@components/ui/input";

export const BlogSidebar = () => (
  <Fragment>
    <SearchInput className="mb-14 hidden md:flex" />
    <div>
      <Headline className="mb-3 ml-1">Popular articles</Headline>
      <BlogPopularPostList />
    </div>
  </Fragment>
);
