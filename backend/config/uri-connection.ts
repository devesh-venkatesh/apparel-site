const { DB_USERNAME, DB_PASSWORD } = process.env

// eslint-disable-next-line max-len
const connectionUri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@apparel-site.4dny8.mongodb.net/apparel-site?retryWrites=true&w=majority`

module.exports = connectionUri
