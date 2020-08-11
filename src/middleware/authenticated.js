export const auth = function() {
  console.log(localStorage.username)
  return localStorage.username ? true : false
}