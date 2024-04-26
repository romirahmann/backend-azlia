const db = require("./../database/project.config");

const getAll = async () =>
  await db
    .select("id_rak", "no_rak", "deskripsi_rak", "is_deleted")
    .from("rak_gudang")
    .where("is_deleted", 0);

const getById = async (id) =>
  await db
    .select("id_rak", "no_rak", "deskripsi_rak", "is_deleted")
    .from("rak_gudang")
    .where("id_rak", id);

const insert = async (data) => await db("rak_gudang").insert(data);
const update = async (id, data) =>
  await db("rak_gudang").where("id_rak", id).update(data);

module.exports = {
  getAll,
  getById,
  insert,
  update,
};
