// @ts-ignore
export const api = axios.create({
  baseURL: 'https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean',
  timeout: 5000
})