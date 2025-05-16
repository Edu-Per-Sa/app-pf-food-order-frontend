export function setLocalStorage(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function getFromLocalStorage(name) {
    const data = JSON.parse(localStorage.getItem(name));
    return data;
}