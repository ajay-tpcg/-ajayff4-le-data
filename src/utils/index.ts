const getRandomValue = (entities: any[]) => {
  const randomIndex = Math.floor(Math.random()*entities.length);
  return entities[randomIndex];
}

export default {
  getRandomValue,
};