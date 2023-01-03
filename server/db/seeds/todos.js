exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, todo: 'study', status: false },
    { id: 2, todo: 'sleep', status: false },
    { id: 3, todo: 'work out', status: false },
  ])
}
