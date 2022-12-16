const getNumberBetween = (min:number, max:number) => {
  const [_min, _max] = min < max ? [min, max] : [max,min];
  return Math.floor(Math.random() * (_max - _min + 1) + _min);
}

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
  getNumberBetween,
  getRandomValue,
  throwErrors,
};