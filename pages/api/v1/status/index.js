import database from "/infra/database";

async function status(request, response) {
  const updateAt = new Date().toISOString();
  console.log(updateAt);
  response.status(200).json({
    update_at: updateAt,
  });
}

export default status;
