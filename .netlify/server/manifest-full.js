export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["codingchaska.png","create.png","favicon.png","img/instagram-48.png","img/linkedin-48.png","laptop.png","logo.png","teach.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-4e8dab5f.js","imports":["_app/immutable/start-4e8dab5f.js","_app/immutable/chunks/index-e5a1bbd6.js","_app/immutable/chunks/singletons-7522accb.js","_app/immutable/chunks/preload-helper-b21cceae.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				names: [],
				types: [],
				optional: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/article/[slug]",
				pattern: /^\/article\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				optional: [false],
				page: { layouts: [0,,], errors: [1,2], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
