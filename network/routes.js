const alianzas = require('../routes/alianzas');
const donaciones = require('../routes/donaciones');
const heroes = require('../routes/heroes');
const inicioVideos = require('../routes/inicioVideos');
const miniJuego = require('../routes/miniJuego');
const talentosHeroes = require('../routes/talentosHeroes');
const guias = require('../routes/guias');

const routes = (server) => {
  server.use('/alianzas', alianzas)
  server.use('/donaciones', donaciones)
  server.use('/heroes', heroes)
  server.use('/inicioVideos', inicioVideos)
  server.use('/miniJuego', miniJuego)
  server.use('/talentosHeroes', talentosHeroes)
  server.use('/guias', guias)
}

module.exports = routes;