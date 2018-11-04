export default function hex2a(hexx) {
  let str = '';
  const hex = hexx.toString();
  for (let i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}