module.exports = {
	routes: {
		Index: {
			path: ['/'],
			method: 'get',
			page: './index',
		},
		Transition: {
			path: ['/transition'],
			method: 'get',
			page: './transition',
		},
	},
};
