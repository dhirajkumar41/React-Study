import React, { Component } from 'react';
import './App.css';
import Validation from "../Validation/Validation";
import Characters from "../Characters/Characters";

class App extends Component {

    state = {
        text:''
    };

    textChangeHandler = (event) => {
        this.setState({
            text : event.target.value
        })
    };

    deleteCharacters = (index) => {
        const originalText = this.state.text.split('');
        originalText.splice(index,1);
        const newText = originalText.join('');
        this.setState({text:newText});
    }


    render() {

        let characters = null;

        if (this.state.text.length >0 ) {
            characters = (
                    <div>
                        {
                            this.state.text.split('').map((character, index) => {
                                return <Characters
                                    character={character}
                                    deleteChars={() => this.deleteCharacters(index)}
                                    key={index}
                                />
                            })
                        }
                    </div>
                )
        };

        return (
            <div className="App">
                <div>
                    <ol>
                      <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
                      <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                      <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
                      <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
                      <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
                      <li>When you click a CharComponent, it should be removed from the entered text.</li>
                    </ol>
                </div>
                <input type="text" value={this.state.text}  onChange={this.textChangeHandler} />
                <p>Text Length - {this.state.text.length}</p>
                <Validation textLength={this.state.text.length}/>
                {characters}
            </div>
        )
    }
}

export default App;
