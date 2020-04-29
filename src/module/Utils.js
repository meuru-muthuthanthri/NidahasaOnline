
export const createAction = (type, action = args => args) => (data) => {
  const payload = action(data);
  console.log(`Event fired - type: ${type} | data: ${data} | payload: ${payload}`);
  return { type, payload };
};
