import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({  fetch, setHeaders }) {
let url = "https://codingchaska.up.railway.app/api/v1/short-tutorial/short-tuts/?author=&is_published=&tags=26"
   let res = await fetch(url);

    return res.json();
  
  throw error(404, 'Not found');
}