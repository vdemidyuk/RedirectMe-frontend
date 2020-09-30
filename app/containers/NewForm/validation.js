const isValidUrl = url => {
  const r = /([^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i;
  return r.test(url);
};

const isValidAppUrl = appUrl => {
  if (
    appUrl &&
    (appUrl.indexOf('http://') === 0 ||
      appUrl.indexOf('https://') === 0 ||
      appUrl.indexOf('ftp://') === 0)
  ) {
    return false;
  }
  const r = /^([a-z0-9]+):[^ "]+$/i;
  return r.test(appUrl);
};

export const validate = form => {
  const errors = {};
  if (!form.uri || (!isValidUrl(form.uri) && !isValidAppUrl(form.uri))) {
    errors.uri = 'Wrong URI';
  }
  return errors;
};
