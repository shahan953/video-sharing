module.exports = {
  server: {
    port: process.env.PORT || 3001,
    compress: false
  },
  db: {
		host: 'localhost',
		dbName: 'videosharing',
		debug: false,
		options: {
			userName: false,
			passWord: false,
			port: 27017
		}
	},
	secret: [
    'yoursecretkey'
  ],
  file: {
    size: '200mb'
  },
  "grant": {
    "server": {
      "host": "localhost:3000"
    }
  }
};
