function solution(skill, skill_trees) {
  var answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    let filteredSkillTree = "";

    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skill.includes(skill_trees[i][j])) {
        filteredSkillTree += skill_trees[i][j];
      }
    }

    if (skill.startsWith(filteredSkillTree)) {
      answer++;
    }
  }

  return answer;
}
