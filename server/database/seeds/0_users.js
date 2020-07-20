exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "demo",
          name: "D'Moe Tester",
          email: "demo@tester.com",
          address: "123 Testing Lane, Testerville, USA 99999",
        },
      ]);
    });
};
