exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "danielti",
          name: "Daniel Ichiyama",
          email: "danielti808@gmail.com",
          address: "1234 Banana Lane, Honolulu, HI 96822"
        }
      ]);
    });
};
