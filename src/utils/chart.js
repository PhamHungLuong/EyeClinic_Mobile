/**
 * this function converts data from format: [{key1: {data1: val1, data2: val2}}, {key2: {data1: val12, data2: val22}}]
 * to: labels = [key1, key2]
 * and: datasets = [{label: data1, data: [val1, val12]}, {label: data2, data: [val2, val22]}]
 * @param {*} statisticData
 * @returns {labels, datasets}
 */
const convertStatisticDataToChartData = (statisticData) => {
  if (!statisticData) return { labels: [], datasets: [] };

  const labels = Object.keys(statisticData);

  const datasetsMap = new Map();
  Object.values(statisticData).forEach((value, index) => {
    Object.keys(value).forEach((key) => {
      if (!datasetsMap.has(key)) {
        datasetsMap.set(key, []);
      }
      datasetsMap.get(key)[index] = value[key];
    });
  });

  const datasets = [...datasetsMap.entries()].map(([key, value]) => ({
    label: key,
    data: value,
  }));

  return { labels, datasets };
};

// /**
//  *
//  * @param {array} statisticData [
//  * {key:}
//  * ]
//  */
// const convertStatisticDataByDateToChartData = (statisticData) => {

// }

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export { convertStatisticDataToChartData, getRandomColor };
