const bookshelf = require("../bookshelf");

class Contact extends bookshelf.Model {
  get tableName() {
    return "contacts"; //connects this model to the table
  } //immutable naming convention, bookshelf uses this behind the scenes to apply the User class's "language" to the users table;
  get hasTimestamps() {
    return true;
  } //immutable naming convention, bookshelf uses this behind the scenes to tell SQL that this table has created_at and updated_at;

  cards() {
    return this.hasMany("Card");
  }
}

module.exports = bookshelf.model("Contact", Contact); //adds the User class to the bookshelf.plugin('registry');
