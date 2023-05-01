const server = require('./server')
const HOST = process.env.HOST || '0.0.0.0'

const PORT = process.env.PORT || 3000

server.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', `${HOST}:${PORT}`)
})
