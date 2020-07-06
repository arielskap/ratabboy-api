const reproduccion = require('../models/reproduccion');

class ReproduccionRepository {
  constructor(model) {
    this.model = model
  }

  async getAll() {
    try {
      return await this.model.find()
    } catch (error) {
      console.log(error.message)
      return undefined
    }
  }
}

module.exports = new ReproduccionRepository(reproduccion);