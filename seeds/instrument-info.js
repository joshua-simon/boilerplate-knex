
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instruments').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruments').insert([
        {id: 1, name: 'Viola', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Bratsche.jpg', blurb:'The viola is a string instrument that is bowed or played with varying techniques. It is slightly larger than a violin and has a lower and deeper sound.'},
        {id: 2, name: 'Violin', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQg8DIkFWPwAOkDZx49T_oZTofWhX_5M5JL8aJ5dHys3xnoukZW', blurb:'The violin, sometimes known as a fiddle, is a wooden string instrument in the violin family.'},
        {id: 3, name: 'Cello', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQb64Laxu-qGt_1kTY636bCrZZ0XR9AGdLvidNUHcXdV2SKXMyW', blurb:'The cello  is a bowed (and occasionally plucked) string instrument of the violin family.'}
      ]);
    });
};
