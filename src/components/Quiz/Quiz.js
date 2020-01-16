import React, { Component } from "react";
import "./styleQuiz.css";
import quizService from "../../quizService";
import QuestionBox from "../QuestionBox/QuestionBox";
import Result from "../Result/Result";

export default class Quiz extends Component {
    state = {
        questionBank : [],
        score : 0,
        responses : 0
    };

    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score : this.state.score + 1
            });
        }
        if (this.state.responses < 15) {
            this.setState({
                responses : this.state.responses + 1
            })
        }
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score : 0,
            responses : 0
        })
    }

    componentDidMount() {
        this.getQuestions();
    }
    
    render() {
        return (
            <div className="containerQuiz">
                <div className="title">Kviz</div>
                {this.state.responses < 15 && this.state.questionBank.length > 0 && this.state.questionBank.map(
                    ({question, answers, correct, questionId}) => (
                        <QuestionBox question={question} options={answers} key={questionId} selected={answer => this.computeAnswer(answer, correct)} ></QuestionBox>
                    )
                )}

                {this.state.responses == 15 &&
                    <Result score={this.state.score} playAgain={this.playAgain}></Result>
                }
            </div>
        );
    }
}
