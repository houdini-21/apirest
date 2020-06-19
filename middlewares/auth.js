const services = require('../service/index')

function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({
      message: 'La peticion no tiene la cabecera de autenticación'
    })
  }

  const token = req.headers.authorization.replace(/['"]+/g, '')

  services.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      return res.status(403).send({
        message: 'No tienes autorización'
      })
    })
}

module.exports = isAuth
