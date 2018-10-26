import React, { Component } from "react";
import { CalcSelectionRow } from "./CalcSelectionRow";
import { ValueBox } from "./ValueBox";
import { checkForEmptyPropValues } from "../utils/checkPropsInObject";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0,
            values: {
                value1: 0,
                value2: 0,
                value3: 0
            },
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        let { type, name, value } = e.target;
        const { calcSelection, values } = this.state;
        value = !!value ? parseInt(value, 10) : value;
        if (type === "radio") {
            this.setState({ calcSelection: name })
            this.calculateResult(name);
        } else {
            const newValues = { ...values, [name]: value };
            this.setState({ values: newValues });
            if (calcSelection) {
                this.calculateResult(calcSelection, newValues);
            }
        }
    }

    calculateResult(name, values = this.state.values) {
        //I send in spread of values for shallow clone of state.
        values = checkForEmptyPropValues({...values});
        const { value1, value2, value3 } = values;
        switch (name) {
            case "multiply":
                this.setState({ result: value1 * value2 * value3 });
                break;
            case "sum":
                this.setState({ result: (value1 + value2 + value3) });
                break;
            default:
                break;
        }
    }

    render() {
        const { values, calcSelection, result } = this.state;
        return (
            <div className="container">
                <ValueBox text="Value 1" name="value1" value={values.value1} handleInputChange={this.handleInputChange} />
                <ValueBox text="Value 2" name="value2" value={values.value2} handleInputChange={this.handleInputChange} />
                <ValueBox text="Value 3" name="value3" value={values.value3} handleInputChange={this.handleInputChange} />
                <div className="box calc">
                    <CalcSelectionRow name="sum" calcSelection={calcSelection} handleInputChange={this.handleInputChange} text="Sum" />
                    <CalcSelectionRow name="multiply" calcSelection={calcSelection} handleInputChange={this.handleInputChange} text="Multiply" />
                    <div className="row result">
                        <span>Result: </span><span>{result}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;