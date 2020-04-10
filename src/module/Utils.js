
export const createAction = (type, action = args => args) => (data) => {
  const payload = action(data);
  console.log(`Event fired - type: ${type} | data: ${JSON.stringify(data)} | payload: ${JSON.stringify(payload)}`);
  return { type, payload };
};
