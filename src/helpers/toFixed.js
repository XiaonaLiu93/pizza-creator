export default function toFixed(num, s) {
  const times = 10 ** s;
  let result = num * times + 0.5;
  result = parseInt(result, 10) / times;
  return result;
}
