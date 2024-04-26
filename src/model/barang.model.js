const db = require("./../database/project.config");

const getAll = async () =>
  await db
    .select(
      "b.barang_id",
      "b.id_jenis_barang",
      "b.id_satuan_barang",
      "b.nama_barang",
      "b.kode_barang",
      "b.is_deleted",
      "b.stok",
      "j.nama_jenis_barang",
      "j.deskripsi_barang",
      "s.nama_satuan_barang"
    )
    .from("barang as b")
    .leftJoin("jenis_barang as j", "j.id_jenis_barang", "b.id_jenis_barang")
    .leftJoin("satuan_barang as s", "s.id_satuan_barang", "b.id_satuan_barang")
    .where("b.is_deleted", 0);

const getById = async (id) =>
  await db
    .select(
      "b.barang_id",
      "b.id_jenis_barang",
      "b.id_satuan_barang",
      "b.nama_barang",
      "b.kode_barang",
      "b.stok",
      "b.is_deleted",
      "j.nama_jenis_barang",
      "j.deskripsi_barang",
      "s.nama_satuan_barang"
    )
    .from("barang as b")
    .leftJoin("jenis_barang as j", "j.id_jenis_barang", "b.id_jenis_barang")
    .leftJoin("satuan_barang as s", "s.id_satuan_barang", "b.id_satuan_barang")
    .andWhere("b.barang_id", id);
const getByCode = async (id) =>
  await db
    .select(
      "b.barang_id",
      "b.id_jenis_barang",
      "b.id_satuan_barang",
      "b.nama_barang",
      "b.kode_barang",
      "b.stok",
      "b.is_deleted",
      "j.nama_jenis_barang",
      "j.deskripsi_barang",
      "s.nama_satuan_barang"
    )
    .from("barang as b")
    .leftJoin("jenis_barang as j", "j.id_jenis_barang", "b.id_jenis_barang")
    .leftJoin("satuan_barang as s", "s.id_satuan_barang", "b.id_satuan_barang")
    .andWhere("b.kode_barang", id);

const insert = async (data) => await db("barang").insert(data);
const update = async (id, data) =>
  await db("barang").where("barang_id", id).update(data);

module.exports = {
  getAll,
  getById,
  getByCode,
  insert,
  update,
};
