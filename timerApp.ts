import React, { useState} from 'react';
import './App.css';

function App() {
    const [start, setStart] = useState<boolean>(false)
    const [timer, setTimer] = useState<number>(0)
    const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

    const clickTimer = () => {

        if (!start) {
            const intervalId = setInterval(() => {
                setTimer(prevSeconds => prevSeconds + 1);
            }, 1000);
            setIntervalId(intervalId)
        } else {
            clearInterval(intervalId)
            // setTimer(0)      //  ЕСЛИ ХОТИМ ЧТОБЫ ДО НУЛЯ СБРАСЫВАЛСЯ ТАЙМЕР
        }
        setStart((prevState) => !prevState)

    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {timer}
                </p>
                <button style={{width: '50px', height: '30px', background: 'white'}}
                        onClick={clickTimer}>{start ? 'Reset' : 'Start'}</button>
            </header>

        </div>
    );
}

export default App;
