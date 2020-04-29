
export const createAction = (type, action = args => args) => (data) => {
  const payload = action(data);
  console.log(`Event fired - type: ${type}`, type, data);
  return { type, payload };
};
