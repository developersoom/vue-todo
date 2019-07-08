const getLocalStorage = (key)=>{
  return localStorage.getItem(key) || []
}
const saveLocalStorage = (key, newItem)=>{
  const items  = getLocalStorage(key);
  return localStorage.setItem(key,JSON.stringify(items.concat(newItem)));
}

export {
  getLocalStorage,
  saveLocalStorage
}