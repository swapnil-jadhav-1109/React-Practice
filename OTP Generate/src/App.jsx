import { useState ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");
 
    const sRef = useRef();
    const tRef = useRef();
    const fRef = useRef();
 
    const handleValue = (e, elem) => {
        let val = e.target.value;
 
        switch (elem) {
            case "first":
                if (val) {
                    if (val.length == 1) setFirst(val);
                    else {
                        val = val[1];
                        setFirst(val);
                    }
 
                    sRef.current.focus();
                }
                else {
                    setFirst("");
                }
                break;
            case "second":
                if (val) {
                    if (val.length == 1) setSecond(val);
                    else {
                        val = val[1];
                        setSecond(val);
                    }
 
                    tRef.current.focus();
                }
                else {
                    setSecond("");
                }
                break;
            case "third":
                if (val) {
                    if (val.length == 1) setThird(val);
                    else {
                        val = val[1];
                        setThird(val);
                    }
 
                    fRef.current.focus();
                }
                else {
                    setThird("");
                }
                break;
            case "fourth":
                if (val) {
                    if (val.length == 1) setFourth(val);
                    else {
                        val = val[1];
                        setFourth(val);
                    }
                }
                else {
                    setFourth("");
                }
                break;
 
        }
    }
 
    return (
        <div className="otp">
            <input
                autoFocus
                value={first}
                onChange={(e) => handleValue(e, "first")}
            />
            <input
                ref={sRef}
                value={second}
                onChange={(e) => handleValue(e, "second")}
            />
            <input
                ref={tRef}
                value={third}
                onChange={(e) => handleValue(e, "third")}
            />
            <input
                ref={fRef}
                value={fourth}
                onChange={(e) => handleValue(e, "fourth")}
            />
        </div>
    )
}

export default App
