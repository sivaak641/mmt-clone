

export const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //validate email (RegEx pattern)

export const user = JSON.parse(localStorage.getItem('user')) //access user from localStorage
