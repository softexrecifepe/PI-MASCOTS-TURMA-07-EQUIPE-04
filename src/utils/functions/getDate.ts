export const currencyYear = () => {
  const date = new Date();
  const year = date.getFullYear();
  return year;
};

export const currencyMonth = () => {
  const date = new Date();
  const month = date.getMonth();
  return month;
};

export const currencyDay = () => {
  const date = new Date();
  const day = date.getDate();
  return day;
};
