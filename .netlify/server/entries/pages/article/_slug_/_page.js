async function load({ params, fetch }) {
  let slug = params.slug;
  let url = `https://gurukulapp.herokuapp.com/api/v1/short-tutorial/short-tut/${slug}/`;
  let res = await fetch(url);
  return res.json();
}
export {
  load
};
