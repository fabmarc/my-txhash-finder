import config from '../config';

const { endpointHost, apiKey } = config;

function serialize(params) {
  if (!params) return '';

  const query = Object.keys(params).reduce((accum, key) => {
    const value = params[key];
    if (value === undefined) return accum;
    accum.push(`${key}=${encodeURIComponent(value)}`);
    return accum;
  }, []);
  return query.join('&');
}

function request(method, url, payload = {}) {
  const params = {};

  params.credentials = 'same-origin';
  params.method = method.toUpperCase();
  params.headers = { 'Content-Type': 'application/json' }

  let endpointUrl = `${endpointHost}${url}`;
  payload.apiKey = apiKey;

  if (payload) {
    if (params.method === 'GET') {
      endpointUrl = `${endpointUrl}?${serialize(payload)}`;
    }
    if (params.method === 'POST'
      || params.method === 'PUT'
      || params.method == 'PATCH') {
      params.body = JSON.stringify(payload);
    }
  }

  return fetch(endpointUrl, params)
    .then((response) => response.json())
    .then((json) => {
      const { error, input } = json;
      if (error) return Promise.reject(error.message);
      return Promise.resolve(input);
    })
    .catch((error) => {
      return Promise.reject(error.message);
    });
}

export {
  request,
  serialize,
}
