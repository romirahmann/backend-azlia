const model = require("./../../model/jenis.model");
const api = require("../../tools/common");

// Rak
const getAllJenis = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getJenisById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateJenis = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    let data = await model.update(id, newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertJenis = async (req, res) => {
  const newData = req.body;
  try {
    let data = await model.insert(newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllJenis,
  getJenisById,
  updateJenis,
  insertJenis,
};
