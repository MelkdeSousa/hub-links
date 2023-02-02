export default <T extends unknown>(data: T[], numberSplitter: number) => {
  const splitData = [];

  for (let index = 0; index < data.length; index += numberSplitter) {
    splitData.push(data.slice(index, index + numberSplitter));
  }

  return splitData;
};
