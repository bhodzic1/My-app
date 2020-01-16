import React, { Component } from 'react';
import './style.css';


export default class Converter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            result: '',
            toInput: 'binary',
            fromInput: 'binary',
            firstComplement: '',
            secondComplement: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleChangeInputValue = this.handleChangeInputValue.bind(this);
    }

    validateDecimal = () => {
        var niz = [];
        niz = this.state.inputValue;
        var i = 0;
        while (i < niz.length) {
            if (niz[i] > '9' || niz[i] < '0') {
                return false;
            }
            i++;
        }
        return true;
    } 

    validateBinary = () => {
        var niz = [];
        niz = this.state.inputValue;
        var i = 0;
        while (i < niz.length) {
            if (niz[i] > '1' || niz[i] < '0') {
                return false;
            }
            i++;
        }
        return true;
    }

    validateHexadecimal = () => {
        var niz = [];
        niz = this.state.inputValue;
        var i = 0;
        while (i < niz.length) {
            if (niz[i] < '1' || (niz[i] > '9' && niz[i] < 'A') || (niz[i] > 'F' && niz[i] < 'a') || niz[i] > 'f') {
                return false;
            }
            i++;
        }
        return true;
    }


    handleClick = (event) => {
        this.setState({
            result: this.state.inputValue
        });
        event.preventDefault();
        if (this.state.fromInput == 'decimal') {
            if (this.validateDecimal()) {
                document.getElementById("inputNumber").style.backgroundColor = "white";
                this.getResult();
            } else {
                document.getElementById("inputNumber").style.backgroundColor = "red";
                this.setState({
                    result: ''
                })
            }
        } else if (this.state.fromInput == 'binary') {
            if (this.validateBinary()) {
                document.getElementById("inputNumber").style.backgroundColor = "white";
                this.getResult();
            } else {
                document.getElementById("inputNumber").style.backgroundColor = "red";
                this.setState({
                    result: ''
                })
            }
        } else {
            if (this.validateHexadecimal()) {
                document.getElementById("inputNumber").style.backgroundColor = "white";
                this.getResult();
            } else {
                document.getElementById("inputNumber").style.backgroundColor = "red";
                this.setState({
                    result: ''
                })
            }
        }
        
    }

    handleChangeInputValue = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleChangeFrom = (e) => {
        this.setState({
            fromInput: e.target.value,
        }); 
    }

    handleChangeTo = (e) => {
        this.setState({
            toInput: e.target.value
        });
    }

    getResult = () => {
        if (this.state.fromInput == 'decimal') {  
            if (this.state.toInput == 'binary') {
                var niz = [];
                var temp = this.state.inputValue;
                
                while (temp > 0.5) {
                    niz.push(temp%2);
                    temp = Math.round(temp/2 - 0.5);
                }
                niz.reverse();
                this.setState({
                    result: niz.join('')
                })
                
                
            } else if (this.state.toInput == 'hexadecimal') {
                var niz = [];
                var temp = this.state.inputValue;
                
                while (temp > 0.5) {
                    if (temp%16 == 10) {
                        niz.push('A');
                    } else if (temp%16 == 11) {
                        niz.push('B');
                    } else if (temp%16 == 12) {
                        niz.push('C');
                    } else if (temp%16 == 13) {
                        niz.push('D');
                    } else if (temp%16 == 14) {
                        niz.push('E');
                    } else if (temp%16 == 15) {
                        niz.push('F');
                    } else {
                        niz.push(temp%16);
                    }
                    
                    temp = Math.round(temp/16 - 0.5);
                }
                niz.reverse();
                this.setState({
                    result: niz.join('')
                })
            }
        } else if (this.state.fromInput == 'binary') {
            if (this.state.toInput == 'decimal') {
                var i = this.state.inputValue.length;
                var j = 0;
                var suma = 0;
                var temp = this.state.inputValue;
                while (j <= i) {
                    suma += (temp%10)*Math.pow(2, j);
                    j++;
                    temp = Math.round(temp/10 - 0.5);
                }

                this.setState({
                    result: suma
                });
            } else if (this.state.toInput == 'hexadecimal') {
                var i = this.state.inputValue.length;
                var j = 0;
                var suma = 0;
                var temp = this.state.inputValue;
                while (j <= i) {
                    suma += (temp%10)*Math.pow(2, j);
                    j++;
                    temp = Math.round(temp/10 - 0.5);
                }

                var niz = [];
                temp = suma;
                
                while (temp > 0.5) {
                    if (temp%16 == 10) {
                        niz.push('A');
                    } else if (temp%16 == 11) {
                        niz.push('B');
                    } else if (temp%16 == 12) {
                        niz.push('C');
                    } else if (temp%16 == 13) {
                        niz.push('D');
                    } else if (temp%16 == 14) {
                        niz.push('E');
                    } else if (temp%16 == 15) {
                        niz.push('F');
                    } else {
                        niz.push(temp%16);
                    }
                    
                    temp = Math.round(temp/16 - 0.5);
                }
                niz.reverse();
                this.setState({
                    result: niz.join('')
                })
            }
        } else if (this.state.fromInput == 'hexadecimal') {
            if (this.state.toInput == 'binary') {
                var i = this.state.inputValue.length;
                var k = i - 1;
                var j = 0;
                var suma = 0;
                var niz = [];
                niz = this.state.inputValue;
                while (j < i) {
                    if (niz[j] == 'A' || niz[j] == 'a') {
                        suma += 10*Math.pow(16, k);
                    } else if (niz[j] == 'B' || niz[j] == 'b') {
                        suma += 11*Math.pow(16, k);
                    } else if (niz[j] == 'C' || niz[j] == 'c') {
                        suma += 12*Math.pow(16, k);
                    } else if (niz[j] == 'D' || niz[j] == 'd') {
                        suma += 13*Math.pow(16, k);
                    } else if (niz[j] == 'E' || niz[j] == 'e') {
                        suma += 14*Math.pow(16, k);
                    } else if (niz[j] == 'F' || niz[j] == 'f') {
                        suma += 15*Math.pow(16, k);
                    } else {
                        suma += niz[j]*Math.pow(16, k);
                    }
                    j++;
                    k--;
                }
                var niz2 = [];
                var temp = suma;
                
                while (temp > 0.5) {
                    niz2.push(temp%2);
                    temp = Math.round(temp/2 - 0.5);
                }
                niz2.reverse();
                this.setState({
                    result: niz2.join('')
                })

            } else if (this.state.toInput == 'decimal') {
                var i = this.state.inputValue.length;
                var k = i - 1;
                var j = 0;
                var suma = 0;
                var niz = [];
                niz = this.state.inputValue;
                while (j < i) {
                    if (niz[j] == 'A' || niz[j] == 'a') {
                        suma += 10*Math.pow(16, k);
                    } else if (niz[j] == 'B' || niz[j] == 'b') {
                        suma += 11*Math.pow(16, k);
                    } else if (niz[j] == 'C' || niz[j] == 'c') {
                        suma += 12*Math.pow(16, k);
                    } else if (niz[j] == 'D' || niz[j] == 'd') {
                        suma += 13*Math.pow(16, k);
                    } else if (niz[j] == 'E' || niz[j] == 'e') {
                        suma += 14*Math.pow(16, k);
                    } else if (niz[j] == 'F' || niz[j] == 'f') {
                        suma += 15*Math.pow(16, k);
                    } else {
                        suma += niz[j]*Math.pow(16, k);
                    }
                    j++;
                    k--;
                }
                
                this.setState({
                    result: suma
                })
            }
        }
    }
    
    render() {
        return (
            <div className="div-app">
                    <form action="/">
                    <div className="unit1-div">
                        <label htmlFor="unit1">From:</label>
                        <select name="cars" id="unit1" className="input-list" onChange={this.handleChangeFrom}>
                                <option name="binary" value="binary">Binary</option>
                                <option value="decimal">Decimal</option>
                                <option value="hexadecimal">Hexadecimal</option>
                        </select>
                    </div>
                    <div className="unit2-div">
                        <label htmlFor="unit2">To:</label>
                        <select value={this.state.toInput} name="cars" id="unit2" className="input-list" onChange={this.handleChangeTo}>
                                <option value="binary">Binary</option>
                                <option value="decimal">Decimal</option>
                                <option value="hexadecimal">Hexadecimal</option>
                        </select>
                    </div>
                     
                <br></br>
                <input className="submit-button" type="submit" value="Convert" onClick={this.handleClick}></input>
                <input className="input-number" id="inputNumber" value={this.state.inputValue} onChange={this.handleChangeInputValue}></input>
                </form>
                
                <label className="label-area" for="resultArea">Result:</label>
                <textarea id="resultArea" value={this.state.result}></textarea>
                <label className="label-area" for="resultArea2">1KK:</label>
                <textarea id="resultArea2" value={this.state.firstComplement}></textarea>
                <label className="label-area" for="resultArea3">2KK:</label>
                <textarea id="resultArea3" value={this.state.secondComplement}></textarea>
                
            </div>
        );
    }
}




