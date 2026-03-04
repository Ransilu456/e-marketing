import { BlogPost } from "./types";

import { nextjs_vs_wordpress_for_seo } from "./articles/nextjs_vs_wordpress_for_seo";
import { high_converting_facebook_posters } from "./articles/high_converting_facebook_posters";
import { building_brand_communities } from "./articles/building_brand_communities";
import { future_of_ai_branding } from "./articles/future_of_ai_branding";
import { dark_mode_design_psychology } from "./articles/dark_mode_design_psychology";
import { accessible_design_is_better_design } from "./articles/accessible_design_is_better_design";

export const blogPosts: BlogPost[] = [
  nextjs_vs_wordpress_for_seo,
  high_converting_facebook_posters,
  building_brand_communities,
  future_of_ai_branding,
  dark_mode_design_psychology,
  accessible_design_is_better_design
];

export const BLOG_IS_PREVIEW = false;
