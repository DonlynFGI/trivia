import { ProxyState } from "../AppState.js";
import { triviaService } from "../Services/TriviaService.js"


function _draw() {
  let question = ProxyState.trivia
  let template = ''
  question.forEach(q => template = q.Template)
  document.getElementById('app').innerHTML = template
  _drawButtons()
}




function _drawButtons() {
  document.getElementById('buttons').innerHTML = `
  <button class="btn btn-success" onClick="app.triviaController.correctAnswer('True')">TRUE</button>
  <button class="btn btn-success" onClick="app.triviaController.correctAnswer('False')">FALSE</button>`
}
export class TriviaController {


  constructor() {


    ProxyState.on("trivia", _draw);
    _draw()
    this.getTrivia()

  }

  async correctAnswer(answer) {
    try {
      await triviaService.correctAnswer(answer)
      console.log('Controller find trivia finished')
    } catch (error) {
      console.error('Oh No!', error)
    }
  }
  async getTrivia(url) {
    try {
      await triviaService.getTrivia(url)
      console.log('Controller find trivia finished')
    } catch (error) {
      console.error('Oh No!', error)
    }
  }

}



