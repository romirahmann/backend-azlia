const db = require("./../database/project.config");

const getAll = async () =>
  await db
    .select("id_satuan_barang", "nama_satuan_barang", "is_deleted")
    .from("satuan_barang")
    .where("is_deleted", 0);

const getById = async (id) =>
  await db
    .select("id_satuan_barang", "nama_satuan_barang", "is_deleted")
    .from("satuan_barang")
    .where("is_deleted", 0)
    .andWhere("id_satuan_barang", id);

const insert = async (data) => await db("satuan_barang").insert(data);
const update = async (id, data) =>
  await db("satuan_barang").where("id_satuan_barang", id).update(data);

module.exports = {
  getAll,
  getById,
  insert,
  update,
};
