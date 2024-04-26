const db = require("./../database/project.config");

const getAll = async () =>
  await db
    .select(
      "id_jenis_barang",
      "nama_jenis_barang",
      "deskripsi_barang",
      "is_deleted"
    )
    .from("jenis_barang")
    .where("is_deleted", 0);

const getById = async (id) =>
  await db
    .select(
      "id_jenis_barang",
      "nama_jenis_barang",
      "deskripsi_barang",
      "is_deleted"
    )
    .from("jenis_barang")
    .where("id_jenis_barang", id);

const insert = async (data) => await db("jenis_barang").insert(data);
const update = async (id, data) =>
  await db("jenis_barang").where("id_jenis_barang", id).update(data);

module.exports = {
  getAll,
  getById,
  insert,
  update,
};
