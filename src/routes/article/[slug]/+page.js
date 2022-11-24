import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params,fetch }) {
  let slug = params.slug;
  let url = import.meta.env.VITE_API_URL+`short-tutorial/short-tut/${slug}/`;
  // console.log(url);
  let res = await fetch(url);
  // console.log(res);

  return res.json();
 }