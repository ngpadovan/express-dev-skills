const skills = [
    {id: 44, language: 'HTML', level: 'advanced', experience: 1},
    {id: 66, language: 'CSS', level: 'intermediate', experience: 1},
    {id: 88, language: 'Javascript', level: 'intermediate', experience: 1}
];

module.exports = {
    getAll,
    getOne
  };

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}
    
  function getAll() {
    return skills;
  }