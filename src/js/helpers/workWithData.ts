type options = { [key: string]: string };
export const getCorrectDateString = (data: string) => {
  const [day, month, year] = data.split('.').map((el) => Number(el));
  const options: options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(year, month - 1, day)
    .toLocaleString('ru-Ru', options)
    .toString()
    .slice(0, -2);
};
