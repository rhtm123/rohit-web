export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-cbca0437.js","imports":["_app/immutable/start-cbca0437.js","_app/immutable/chunks/index-eeab8f8d.js","_app/immutable/chunks/singletons-fa63cc62.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "articles",
				pattern: /^\/articles\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "my-story",
				pattern: /^\/my-story\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "article/[slug]",
				pattern: /^\/article\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				page: { layouts: [0,,], errors: [1,2], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
