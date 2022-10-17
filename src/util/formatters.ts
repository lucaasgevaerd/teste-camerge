export const formatDate = (date: string) => {
  const dateUpdated = new Date(date);

  const daySrc = dateUpdated.getDate();
  const monthSrc = dateUpdated.getMonth() + 1;
  const yearSrc = dateUpdated.getFullYear();

  return `${String(daySrc).length === 1 ? `0${daySrc}` : daySrc}/${
    String(monthSrc).length === 1 ? `0${monthSrc}` : monthSrc
  }/${String(yearSrc)}`;
};

export const formatDateAndHour = (date: string) => {
  const dateUpdated = new Date(date);

  const daySrc = dateUpdated.getDate();
  const monthSrc = dateUpdated.getMonth() + 1;
  const yearSrc = dateUpdated.getFullYear();
  const hoursSrc = dateUpdated.getHours();
  const minutesSrc = dateUpdated.getMinutes();
  const secondsSrc = dateUpdated.getSeconds();

  return `${String(daySrc).length === 1 ? `0${daySrc}` : daySrc}/${
    String(monthSrc).length === 1 ? `0${monthSrc}` : monthSrc
  }/${String(yearSrc)}  ${
    String(hoursSrc).length === 1 ? `0${hoursSrc}` : hoursSrc
  }:${String(minutesSrc).length === 1 ? `0${minutesSrc}` : minutesSrc}:${
    String(secondsSrc).length === 1 ? `0${secondsSrc}` : secondsSrc
  }`;
};

export const formatDayAndMonth = (date: string) => {
  const dateUpdated = new Date(date);

  const daySrc = dateUpdated.getDate();
  const monthSrc = dateUpdated.getMonth() + 1;

  return `${String(daySrc).length === 1 ? `0${daySrc}` : daySrc}/${
    String(monthSrc).length === 1 ? `0${monthSrc}` : monthSrc
  }`;
};
