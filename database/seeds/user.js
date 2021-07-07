
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'jibble', password:'pass'},
        {username:'jobble', password:'pass'},
        {username:'jabble', password:'pass'}
        
      ]);
    });
};
