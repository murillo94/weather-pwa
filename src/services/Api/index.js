const api = 'https://api.openweathermap.org/data/2.5';

// The api key is ok to be exposed, it's free and only for self study.
const key = 'b5e7ada3bd028f6482908a861c2306d1';

const defaultContent = {
  appid: key,
  units: 'metric',
  lang: 'en'
};

function queryString(obj) {
  return Object.entries(obj)
    .map(([index, val]) => `${index}=${val}`)
    .join('&');
}

export default async function request(url, content = {}) {
  const obj = { ...defaultContent, ...content };

  const response = await fetch(`${api}/${url}?${queryString(obj)}`);
  const data = await response;

  return data;
}
