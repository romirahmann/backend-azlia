const model = require("./../../model/barang.model");
const api = require("../../tools/common");

// Rak
const getAllBarang = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getBarangById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getBarangByCode = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getByCode(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateBarang = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  try {
    let data = await model.update(id, newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertBarang = async (req, res) => {
  const newData = req.body;
  try {
    let data = await model.insert(newData);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllBarang,
  getBarangById,
  updateBarang,
  insertBarang,
  getBarangByCode,
};
