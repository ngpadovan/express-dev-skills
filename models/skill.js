const skills = [
    {id: 44, skill: 'HTML', level: 'advanced', experience: 1},
    {id: 66, skill: 'CSS', level: 'intermediate', experience: 1},
    {id: 88, skill: 'Javascript', level: 'intermediate', experience: 1}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    //find the index for the dkill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
    }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.level = '';
    skills.push(skill);
  }

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}
    
  function getAll() {
    return skills;
  }