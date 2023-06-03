import React, {useState} from "react";

import "./EightBall.css";
import defaultAnswers from "./answers.json";
import {choice} from "./random";

function EightBall({answers = defaultAnswers}){
    const [answer, setAnswer] = useState({
        msg:"Think of a question.",
        color: "blue"
    });

    function handleClick(evt){
        setAnswer(choice(answers));
    }

    function reset(evt){
        setAnswer({
            msg:"Think of a question.",
            color: "blue"
        });
    }
    return(
        <div className="container">
            <div className="ball" onClick={handleClick}>
            <div className="EightBall"
                 style={{backgroundColor: answer.color}}>
                <p>{answer.msg}</p>
            </div>
            </div>
            <button className="reset" onClick={reset}>Reset</button>
        </div>
    );
}

export default EightBall;