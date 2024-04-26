const model = require("./../../model/transaksi.model");
const api = require("../../tools/common");

const getAllCategory = async (req, res) => {
  try {
    let data = await model.getAllCategory();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getAllTransaction = async (req, res) => {
  try {
    let data = await model.getAll();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const newSupplier = req.body;
  try {
    let data = await model.update(id, newSupplier);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.deleteTransaction(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertTransaction = async (req, res) => {
  const newSupplier = req.body;
  try {
    let data = await model.insert(newSupplier);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const getTransactionByDate = async (req, res) => {
  const { month, year } = req.params;
  try {
    let data = await model.transactionByDate(month, year);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getTransactionByRak = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.transactionByRak(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getTransactionByKadaluarsa = async (req, res) => {
  const { month, year, day } = req.params;
  try {
    let data = await model.transactionByKadaluarsa(month, year, day);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllTransaction,
  getTransactionById,
  getTransactionByDate,
  getTransactionByRak,
  getTransactionByKadaluarsa,
  updateTransaction,
  insertTransaction,
  getAllCategory,
  deleteTransaction,
};
