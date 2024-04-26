const model = require("./../../model/supplier.model");
const api = require("../../tools/common");

const getAllSupplier = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getSupplierById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateSupplier = async (req, res) => {
  const { id } = req.params;
  const newSupplier = req.body;
  try {
    let data = await model.update(id, newSupplier);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertSupplier = async (req, res) => {
  const newSupplier = req.body;
  try {
    let data = await model.insert(newSupplier);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllSupplier,
  getSupplierById,
  updateSupplier,
  insertSupplier,
};
