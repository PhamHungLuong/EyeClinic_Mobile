import dayjs from 'dayjs';

const formatAudioTime = (numberOfSeconds) => {
  let minutes = Math.floor(numberOfSeconds / 60);
  let seconds = Math.floor(numberOfSeconds) - 60 * minutes;

  minutes = minutes.toString().padStart(2, '0');
  seconds = seconds.toString().padStart(2, '0');

  return `${minutes}:${seconds}`;
};

const convertFormatDate = (birthday, formatString = 'HH:mm DD-MM-YYYY') => {
  /** input birthday format yyyy-mm-dd */
  const now = dayjs(birthday);

  /** input birthday format dd-mm-yyyy */
  return now.format(formatString);
};

const calculateAge = (birthday) => {
  /** input String birthday */
  const birthdayConvert = dayjs(birthday);

  const now = dayjs();

  const diffDays = now.diff(birthdayConvert, 'day');

  /** input interger age */
  return Math.floor(diffDays / 365);
};

/**
 * date Date => Ngày 08 tháng 08 năm 2023
 */
const convertDateToVietnameseText = (date) => {
  const time = dayjs(date).format('DD-MM-YYYY');
  const [ngay, thang, nam] = time.split('-');
  return `Ngày ${ngay} tháng ${thang} năm ${nam}`;
};

const getStartAndEndOfDay = (date) => {
  const startDate = dayjs(date).startOf('day').toDate(); // get date in 0h00
  const endDate = dayjs(date).endOf('day').toDate(); // get date in 23h59

  return { startDate, endDate };
};

const calculateFromNowToRetestDate = (reTestDateDay, createAtDay) => {
  const createAtDate = dayjs(createAtDay, 'D/M/YYYY');
  const reTestDate = dayjs(reTestDateDay, 'D/M/YYYY');

  const diff = reTestDate.diff(createAtDate, 'days');

  // Extract the number of years, months and days from the period.
  const numberOfYear = Math.floor(diff / (365 * 24 * 60 * 60 * 1000)); // get number of years
  const numberOfMonth = reTestDate.diff(
    createAtDate.add(numberOfYear, 'year'),
    'months',
  ); // get number of month

  const numberOfDay = reTestDate.diff(
    createAtDate.add(numberOfYear, 'year').add(numberOfMonth, 'months'),
    'days',
  );

  if (numberOfMonth === 0) {
    return `${numberOfDay} ngày`;
  }

  return `${numberOfMonth} tháng ${numberOfDay} ngày`;
};

const calculateTime = (date1, date2) => {
  if (date2.isAfter(date1)) {
    const d1 = dayjs(date1);
    const d2 = dayjs(date2);
    const daysDifference = d2.diff(d1, 'day');

    return Math.abs(daysDifference);
  }

  return null;
};

export {
  formatAudioTime,
  calculateTime,
  calculateAge,
  convertFormatDate,
  getStartAndEndOfDay,
  convertDateToVietnameseText,
  calculateFromNowToRetestDate,
};
