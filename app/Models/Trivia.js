

export class trivia {
  constructor(data) {
    this.question = data.question
    this.correct = data.correct_answer
  }

  get Template() {
    return `<h1>${this.question} </h1>`
  }
}