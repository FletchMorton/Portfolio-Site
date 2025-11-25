import { useEffect, useState, useRef } from 'react'
import './Search.css'
import smarker from '../assets/marker.png'
import Modal from '../components/modal.jsx'
import Rain from '../components/rain.jsx'

function Search() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [engine, setEngine] = useState('PrivAU');
  const [url, setUrl] = useState('https://priv.au/search?q=');
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [timer, setTimer] = useState(-1);

  const inputRef = useRef();
  const timerRef = useRef(timer);

  function isNumeric(value){ return /^\d+$/.test(value); }

  function timeToStr(value)
  {
        /* Convert from seconds to hh:mm:ss */
        var hours = Math.floor(value / 3600);
        var minutes = Math.floor((value - (hours * 3600)) / 60);
        var seconds = value - (hours * 3600) - (minutes * 60);

        if(hours < 10) hours = "0"+hours;
        if(minutes < 10) minutes = "0"+minutes;
        if(seconds < 10) seconds = "0"+seconds;

        return(hours+":"+minutes+":"+seconds);
  }

  {/*Track timer duration*/}
  useEffect(() => {
    timerRef.current = timer;
  }, [timer]);

  {/*Focus on the reference as soon as the page loads*/}
  useEffect(()=>{
    inputRef.current.focus();

    const updateDateTime = () => {
      const date = new Date().toLocaleDateString('en-US', {timeZone: "America/New_York", weekday: 'long', month: 'long', day: 'numeric'});
      const time = new Date().toLocaleTimeString('en-US', {timeZone: "America/New_York", hour12: true, hour: 'numeric', minute: 'numeric'});

      setCurrentDate(date);
      if(timerRef.current == -1) setCurrentTime(time);
      else setCurrentTime(timeToStr(timerRef.current));
    };

    const updateTimer = () =>
    {
      const currentTimer = timerRef.current;
      if(currentTimer >= 0) {
          setTimer((currentTimer) => currentTimer - 1); 

        if(currentTimer == 0) {
          setTimer(-1);
          window.alert("Your Timer Has Ended.");
          /* noise */
        };
      } else if(currentTimer < -1) {
          setTimer(-1);
          window.alert("Incorrect formatting. List your time as hh mm ss.");
      }
    };

    /* Update date and time each second */
    updateDateTime();
    const intervalId = setInterval(() => {updateDateTime(); updateTimer();}, 1000);

    return () => clearInterval(intervalId);

  },[]);

  const swapEngine = (event) =>
    {
      setCount((count) => count + 1);

      switch(count) {
        case 0:
          setEngine("RhsczEU");
          setUrl('https://search.rhscz.eu/search?q=');
        break;

        case 1:
          setEngine("Startpage");
          setUrl('https://www.startpage.com/sp/search?query=');
        break;

        case 2:
          setEngine("Google");
          setUrl('https://www.google.com/search?q=');
        break;

        case 3:
          setCount((count) => 0);
          setEngine("PrivAU");
          setUrl('https://priv.au/search?q=');
        break;

        default:
          setEngine("ERROR");
          setUrl('');
      }
    };

    const startTimer = (input) =>
    {
      var hours = -1;
      var minutes = -1;
      var seconds = -1;

      /* Break up the input */
      for(let i = 0; i < 2; i++) {
        if(input.indexOf(' ') > -1 && isNumeric(input.substring(0, input.indexOf(' ')))) {
          if(i == 0) hours = parseInt(input, 10);
          else minutes = parseInt(input, 10);

          input = input.substring(input.indexOf(' ')+1);
        }
      }

      if(isNumeric(input)) seconds = parseInt(input, 10);
      else seconds = -999; /* flags error */

      if(minutes == -1) {
          if (hours == -1) hours = 0;
          minutes = hours;
          hours = 0;
      }

      setTimer((hours*3600)+(minutes*60)+seconds); 
    };
  

  return (
    <>
      <head><title>Search Page</title></head>
      <header className='header'>
        <ul className='nav-links'>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#search">Search Engine</a>
          </li>
        </ul>
      </header>

      <section className='dock' id='dock'>
        <div className='rain-container'><Rain /></div>
        <div className="input-box">
          
          <h1 className='clock'>{currentTime}</h1>
          <h2 className='date-text'>{currentDate}</h2>

          <div className="input">
            <input
                ref={inputRef}
                type='text'
                value={input}
                onChange={e=>setInput(e.target.value)} /* when the user enters something, update the input value with the event "e" */
                onKeyDown={e=>{if (e.key === "Enter") {

                  switch(input) {
                    case "/alert":
                      window.alert(input);
                      break;

                    case "/proton":
                      window.location.href = "https://proton.me/";
                    break;

                    case "/youtube":
                    case "/youtueb":
                      window.location.href = "https://youtube.com";
                    break;

                    case "/tuta":
                      window.location.href = "https://tuta.com/";
                    break;

                    case "/jisho":
                      window.location.href = "https://jisho.org/";
                    break;

                    case "/trans":
                      window.location.href = "https://translate.google.com/";
                    break;

                    case "/crono":
                      window.location.href = "https://cronometer.com/";
                    break;
                  
                    default:
                      if(input.substring(0, 6) == "/timer") startTimer(input.substring(7));
                      else window.location.href = (url + input.replaceAll(" ", "+"));
                    break;
                    }

                  setInput("");
                
                }}}
            />
            <img className='smarker' src={smarker}></img>
          </div>

          <div className="btn" data-text={engine} onClick={swapEngine}>{engine}</div>
        </div>

        {/* Help Button */}
        <div className="help-card">
          <Modal />
        </div>

      </section>

    </>
  )
}

export default Search
