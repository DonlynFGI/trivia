import { ProxyState } from "../AppState.js";
import { trivia } from "../Models/Trivia.js";
import { api } from "./AxiosService.js";


class TriviaService {
  async correctAnswer(answer) {
    console.log(answer, ProxyState.answer)
    if (answer == ProxyState.answer) {
      alert("Correct!")
      return this.getTrivia
    }
    alert("Wrong!")
  }
  async getTrivia(results) {
    const response = await api.get(results)
    console.log(response.data)
    ProxyState.trivia = response.data.results.map(q => new trivia(q))
    ProxyState.answer = response.data.results[0].correct_answer
  }
}



export const triviaService = new TriviaService();