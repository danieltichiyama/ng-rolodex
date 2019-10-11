exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contacts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("contacts").insert([
        {
          name: "Brian Huffman",
          address: "123 You and Me",
          mobile: "1-111-111-1111",
          email: "brian_huffman@yahoo.com",
          created_by: 1
        },
        {
          name: "Calvin Moon",
          address: "456 I eat sticks",
          mobile: "2-222-222-2222",
          email: "calvin_moon@yahoo.com",
          created_by: 1
        },
        {
          name: "Brad McKinney",
          address: "789 Struttin' the line",
          mobile: "3-333-333-3333",
          email: "brad@brad.com",
          created_by: 1
        }
      ]);
    });
};
