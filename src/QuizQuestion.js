import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    render() {

        let button_text = this.props.quiz_question.answer_options[0]

        return (
            <main>

                <section>

                    <p>{this.props.quiz_question.instruction_text}</p>

                </section>

                <section className="button">

                    <ul>
                        <QuizQuestionButton button_text={button_text} />
                    </ul>

                </section>
                
            </main>
        )
    }
}

export default QuizQuestion