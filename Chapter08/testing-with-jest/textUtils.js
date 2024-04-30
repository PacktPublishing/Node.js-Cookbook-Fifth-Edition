function lowercase (str) {
  return str.toLowerCase();
}
function uppercase (str) {
  return str.toUpperCase();
}
function capitalize (str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() +
   str.slice(1).toLowerCase();
}
module.exports = { lowercase, uppercase, capitalize };
