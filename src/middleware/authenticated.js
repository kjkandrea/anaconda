export const auth = function() {
  return localStorage.username ? true : false
}