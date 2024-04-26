const model = require("./../../model/rak.model");
const api = require("../../tools/common");

// Rak
const getAllRak = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getRakById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateRak = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    let data = await model.update(id, newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertRak = async (req, res) => {
  const newData = req.body;
  try {
    let data = await model.insert(newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllRak,
  getRakById,
  updateRak,
  insertRak,
};
