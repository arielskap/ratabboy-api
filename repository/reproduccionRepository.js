const reproduccion = require('../models/reproduccion');

class ReproduccionRepository {
  constructor(model) {
    this.model = model
  }

  async getAll() {
    return await this.model.find()
  }
}

module.exports = new ReproduccionRepository(reproduccion);