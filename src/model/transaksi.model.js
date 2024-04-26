const db = require("./../database/project.config");

const getAll = async () =>
  await db
    .select(
      "t.id_transaction",
      "t.category_transaction_id",
      "t.barang_id",
      "t.id_supplier",
      "t.id_rak",
      "t.date",
      "t.tgl_kadaluarsa",
      "t.jumlah_barang",
      "c.category_name",
      "b.nama_barang",
      "b.kode_barang",
      "b.stok",
      "s.nama_supplier",
      "s.alamat_supplier",
      "s.no_telp",
      "r.no_rak",
      "r.deskripsi_rak",
      "j.nama_jenis_barang",
      "j.deskripsi_barang",
      "sb.nama_satuan_barang"
    )
    .from("transactions as t")
    .leftJoin(
      "categories_transaction as c",
      "c.category_transaction_id",
      "t.category_transaction_id"
    )
    .leftJoin("barang as b", "b.barang_id", "t.barang_id")
    .leftJoin("supplier as s", "t.id_supplier", "s.id_supplier")
    .leftJoin("rak_gudang as r", "t.id_rak", "r.id_rak")
    .leftJoin("jenis_barang as j", "b.id_jenis_barang", "j.id_jenis_barang")
    .leftJoin(
      "satuan_barang as sb",
      "b.id_satuan_barang",
      "sb.id_satuan_barang"
    )
    .where("t.is_deleted", 0);

const getById = async (id) =>
  await db
    .select(
      "t.id_transaction",
      "t.category_transaction_id",
      "t.barang_id",
      "t.id_supplier",
      "t.id_rak",
      "t.date",
      "t.tgl_kadaluarsa",
      "t.jumlah_barang",
      "c.category_name",
      "b.nama_barang",
      "b.kode_barang",
      "b.stok",
      "s.nama_supplier",
      "s.alamat_supplier",
      "s.no_telp",
      "r.no_rak",
      "r.deskripsi_rak",
      "j.nama_jenis_barang",
      "j.deskripsi_barang",
      "sb.nama_satuan_barang"
    )
    .from("transactions as t")
    .leftJoin(
      "categories_transaction as c",
      "c.category_transaction_id",
      "t.category_transaction_id"
    )
    .leftJoin("barang as b", "b.barang_id", "t.barang_id")
    .leftJoin("supplier as s", "t.id_supplier", "s.id_supplier")
    .leftJoin("rak_gudang as r", "t.id_rak", "r.id_rak")
    .leftJoin("jenis_barang as j", "b.id_jenis_barang", "j.id_jenis_barang")
    .leftJoin(
      "satuan_barang as sb",
      "b.id_satuan_barang",
      "sb.id_satuan_barang"
    )
    .where("t.is_deleted", 0)
    .andWhere("t.id_transaction", id);

const transactionByDate = async (month, year) =>
  await db
    .select(
      "t.id_transaction",
      "t.category_transaction_id",
      "t.barang_id",
      "t.id_supplier",
      "t.id_rak",
      "t.date",
      "t.tgl_kadaluarsa",
      "t.jumlah_barang",
      "c.category_name",
      "b.nama_barang",
      "b.kode_barang",
      "b.stok",
      "s.nama_supplier",
      "s.alamat_supplier",
      "s.no_telp",
      "r.no_rak",
      "r.deskripsi_rak",
      "j.nama_jenis_barang",
      "j.deskripsi_barang",
      "sb.nama_satuan_barang"
    )
    .from("transactions as t")
    .leftJoin(
      "categories_transaction as c",
      "c.category_transaction_id",
      "t.category_transaction_id"
    )
    .leftJoin("barang as b", "b.barang_id", "t.barang_id")
    .leftJoin("supplier as s", "t.id_supplier", "s.id_supplier")
    .leftJoin("rak_gudang as r", "t.id_rak", "r.id_rak")
    .leftJoin("jenis_barang as j", "b.id_jenis_barang", "j.id_jenis_barang")
    .leftJoin(
      "satuan_barang as sb",
      "b.id_satuan_barang",
      "sb.id_satuan_barang"
    )
    .where("t.is_deleted", 0)
    .whereRaw("MONTH(t.date) = ?", [month])
    .whereRaw("YEAR(t.date) = ?", [year]);

const transactionByRak = async (id) =>
  await db
    .select(
      "t.id_transaction",
      "t.category_transaction_id",
      "t.barang_id",
      "t.id_supplier",
      "t.id_rak",
      "t.date",
      "t.tgl_kadaluarsa",
      "t.jumlah_barang",
      "c.category_name",
      "b.nama_barang",
      "b.kode_barang",
      "b.stok",
      "s.nama_supplier",
      "s.alamat_supplier",
      "s.no_telp",
      "r.no_rak",
      "r.deskripsi_rak",
      "j.nama_jenis_barang",
      "j.deskripsi_barang",
      "sb.nama_satuan_barang"
    )
    .from("transactions as t")
    .leftJoin(
      "categories_transaction as c",
      "c.category_transaction_id",
      "t.category_transaction_id"
    )
    .leftJoin("barang as b", "b.barang_id", "t.barang_id")
    .leftJoin("supplier as s", "t.id_supplier", "s.id_supplier")
    .leftJoin("rak_gudang as r", "t.id_rak", "r.id_rak")
    .leftJoin("jenis_barang as j", "b.id_jenis_barang", "j.id_jenis_barang")
    .leftJoin(
      "satuan_barang as sb",
      "b.id_satuan_barang",
      "sb.id_satuan_barang"
    )
    .where("t.is_deleted", 0)
    .andWhere("r.no_rak", id);

const transactionByKadaluarsa = async (month, year, day) =>
  await db
    .select(
      "t.id_transaction",
      "t.category_transaction_id",
      "t.barang_id",
      "t.id_supplier",
      "t.id_rak",
      "t.date",
      "t.tgl_kadaluarsa",
      "t.jumlah_barang",
      "c.category_name",
      "b.nama_barang",
      "b.kode_barang",
      "b.stok",
      "s.nama_supplier",
      "s.alamat_supplier",
      "s.no_telp",
      "r.no_rak",
      "r.deskripsi_rak",
      "j.nama_jenis_barang",
      "j.deskripsi_barang",
      "sb.nama_satuan_barang"
    )
    .from("transactions as t")
    .leftJoin(
      "categories_transaction as c",
      "c.category_transaction_id",
      "t.category_transaction_id"
    )
    .leftJoin("barang as b", "b.barang_id", "t.barang_id")
    .leftJoin("supplier as s", "t.id_supplier", "s.id_supplier")
    .leftJoin("rak_gudang as r", "t.id_rak", "r.id_rak")
    .leftJoin("jenis_barang as j", "b.id_jenis_barang", "j.id_jenis_barang")
    .leftJoin(
      "satuan_barang as sb",
      "b.id_satuan_barang",
      "sb.id_satuan_barang"
    )
    .where("t.is_deleted", 0)
    .whereRaw("MONTH(t.tgl_kadaluarsa) = ?", [month])
    .whereRaw("YEAR(t.tgl_kadaluarsa) = ?", [year])
    .whereRaw("DAY(t.tgl_kadaluarsa) = ?", [day]);

const insert = async (data) => await db("transactions").insert(data);
const deleteTransaction = async (id) =>
  await db("transactions").where("id_transaction", id).delete();
const update = async (id, data) =>
  await db("transaction").where("id_transaction", id).update(data);

const getAllCategory = async () =>
  await db
    .select("category_transaction_id", "category_name")
    .from("categories_transaction");

module.exports = {
  getAll,
  getById,
  insert,
  update,
  transactionByDate,
  transactionByKadaluarsa,
  transactionByRak,
  getAllCategory,
  deleteTransaction,
};
