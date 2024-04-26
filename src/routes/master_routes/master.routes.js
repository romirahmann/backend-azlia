var express = require("express");
var router = express.Router();

const UserController = require("./../../controller/master_controller/UsersController");
const SupplierController = require("./../../controller/master_controller/SupplierController");
const SatuanController = require("./../../controller/master_controller/SatuanController");
const RakController = require("./../../controller/master_controller/RakController");
const JenisController = require("./../../controller/master_controller/JenisController");
const BarangController = require("./../../controller/master_controller/BarangController");
const TransactionsController = require("./../../controller/master_controller/TransactionController");

// USER CONTROLLER
router.get("/users", UserController.getAllUsers);
router.get("/user/:id", UserController.getUserById);
router.post("/user", UserController.register);
router.put("/user/:id", UserController.updateUser);
router.get("/roles", UserController.getAllRole);

// supplier
router.get("/suppliers", SupplierController.getAllSupplier);
router.get("/supplier/:id", SupplierController.getSupplierById);
router.post("/supplier", SupplierController.insertSupplier);
router.put("/supplier/:id", SupplierController.updateSupplier);

// jenis barang
router.get("/jenis", JenisController.getAllJenis);
router.get("/jenis/:id", JenisController.getJenisById);
router.post("/jenis", JenisController.insertJenis);
router.put("/jenis/:id", JenisController.updateJenis);

// satuan barang
router.get("/satuan", SatuanController.getAllSatuan);
router.get("/satuan/:id", SatuanController.getSatuanById);
router.post("/satuan", SatuanController.insertSatuan);
router.put("/satuan/:id", SatuanController.updateSatuan);

// rak gudang
router.get("/rak", RakController.getAllRak);
router.get("/rak/:id", RakController.getRakById);
router.post("/rak", RakController.insertRak);
router.put("/rak/:id", RakController.updateRak);

// barang
router.get("/barang", BarangController.getAllBarang);
router.get("/barang/:id", BarangController.getBarangById);
router.post("/barang", BarangController.insertBarang);
router.put("/barang/:id", BarangController.updateBarang);

// Transaction
router.get("/categories", TransactionsController.getAllCategory);
router.get("/transactions", TransactionsController.getAllTransaction);
router.get("/transaction/:id", TransactionsController.getTransactionById);
router.post("/transaction", TransactionsController.insertTransaction);
router.put("/transaction/:id", TransactionsController.updateTransaction);
router.delete("/transaction/:id", TransactionsController.deleteTransaction);
router.get(
  "/transaction-by-date/:month/:year",
  TransactionsController.getTransactionByDate
);
router.get(
  "/transaction-by-rak/:id",
  TransactionsController.getTransactionByRak
);
router.get(
  "/transaction-by-kadaluarsa/:month/:year/:day",
  TransactionsController.getTransactionByKadaluarsa
);

module.exports = router;
