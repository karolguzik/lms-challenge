const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': 'src/components',
    '@pages': 'src/pages',
    '@templates': 'src/templates',
    '@context': 'src/context',
    '@assets' : 'src/assets',
    '@utils' : 'src/utils'
  })(config)

  return config
}