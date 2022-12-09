const getRandomValue = (entities: any[]) => {
  const randomIndex = Math.floor(Math.random()*entities.length);
  return entities[randomIndex];
}

const throwErrors = ((issues: any[]) => {
  issues.forEach(issue => {
    throw new Error(issue.message);
  });
})

export default {
  getRandomValue,
  throwErrors,
};