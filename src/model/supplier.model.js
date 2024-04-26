const db = require("./../database/project.config");

const getAll = async () =>
  await db
    .select(
      "id_supplier",
      "nama_supplier",
      "alamat_supplier",
      "no_telp",
      "is_deleted"
    )
    .from("supplier")
    .where("is_deleted", 0);

const getById = async (id) =>
  await db
    .select(
      "id_supplier",
      "nama_supplier",
      "alamat_supplier",
      "no_telp",
      "is_deleted"
    )
    .from("supplier")
    .where("id_supplier", id);

const insert = async (data) => await db("supplier").insert(data);
const update = async (id, data) =>
  await db("supplier").where("id_supplier", id).update(data);

module.exports = {
  getAll,
  getById,
  insert,
  update,
};
