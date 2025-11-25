import './Portfolio.css'
import animelleImg from '../assets/animellegame.png'
import retroImg from '../assets/RetroVault_Logo.jpg'
import searchImg from '../assets/searcheng.png'
import crudImg from '../assets/crudcon.png'
import Rain from '../components/rain.jsx'

function Portfolio() {

  const opnWinNoPhishing = (url) =>
  {
    var link = window.open(url, '_blank', 'noopener,noreferrer');
    if(link) link.opener = null;
  };

  return (
    <>
      <head><title>FM Portfolio</title></head>
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

      <div className='rain-container'><Rain /></div>

      <section className='about' id='about'>
        <div className="about-container">
          <div className="info-box">

            <div className="name-text">
              <h1>Fletcher Morton</h1>
            </div>

            <div className="socials">
              <i className='fa-brands fa-github' id='github-icon' onClick={() => opnWinNoPhishing('https://github.com/FletchMorton')}></i>
              {/* <i className="fa-solid fa-file" id='resume-icon'></i> */}
            </div>

            <div className="divider"></div>

            <div className="blurb-text">
              <p>I’m a recent Computer Science graduate from the University of Central Florida with a passion for software security, internet privacy, and software development. My background includes hands-on experience in full-stack development, cloud computing, and cybersecurity through academic 
                and personal projects.</p>
              <p>Certified in CompTIA Security+, AWS Cloud Foundations, and CyberDefense Pro, I possess both technical breadth and a focus on secure coding practices. My technical toolkit includes knowledge of both Windows and Linux, most common programming languages such as C, C++, C#, Java, Python, JavaScript, 
                HTML, and CSS, database software like SQL and MongoDB, as well as a variety of security tools such as Wireshark, Burp Suite, Nmap, and Security Onion. </p>
              <p>I’m eager to contribute my skills as a software devloper or cyber security professional, and to continue learning alongside experienced professionals.</p>
            </div>
          </div>
        </div>
      </section>


      <section className='projects' id='projects'>
        <h2 className='section-title'>Projects</h2>

        <div className="divider-contianer">
          <div className="divider" id='subdivider'></div>
        </div>

        <div className="project-container">

          <div className="grid">

            <div className="grid-card">
              <div className="grid-card-pane">
                <img src={animelleImg} className='rect-img' />
              </div>

              <div className="grid-card-pane">
                 <span>AnimELLE Crossing</span>
                  <p>As per the <a href='https://chdr.cs.ucf.edu/elle/home'>ELLE - Endless Learner</a> site, AnimELLE Crossing is an educational game with the intent to help students with their language learning journey. Students will get to play multiple mini games that are encompassed within the AnimELLE Crossing world, interact with non-playable characters, and personalize different aspects of their gameplay.</p>
                  <p>I worked on several aspects of the game including the design and implemention of the minimap system, some UI components, playable minigames, character animations, in-game shops, playable maps, and a large amount of character dialogue.</p>
                  <p>Development was done in a 6-person team underneath an Agile/Scrum environment, and after recieving the final deliverable, our sponsor greenlit the game to be used within language courses at the University of Central Florida to administer curriculum.</p>
              </div>
            </div>

            <div className="grid-card">
              <div className="grid-card-pane">
                <img src={retroImg} className='sqr-img' />
              </div>

              <div className="grid-card-pane">
                <span>RetroVault</span>
                  <p>RetroVault was a proof-of-concept application to provide secure, encrypted storage for private details such as passwords, credit card information, and secure notes for internet users who sought a private storage solution.</p>
                  <p>I was the primary back-end developer and worked heavily in testing and implementation as well. A key focus of mine on this project was to ensure the application was not vulnerable to any cyberattacks. I accomplished this through the use of strong encryption algorithms as well as researching common attack vectors such as SQL-injection, and blocking off their intrustion points in the code.</p>
              </div>
            </div>

            <div className="grid-card">
              <div className="grid-card-pane">
                <img src={searchImg} className='rect-img' />
              </div>

              <div className="grid-card-pane">
                <span>Polysearch Engine</span>
                   <p>I use several different search engines throughout the day depending on what I'm searching for; to alleviate myself the task of manually switching engines through a url, search tag, or browser configuration, I created the <a href='localhost:5173/#search'>search page</a> of this website in order to allow myself to switch engines at the press of a button.</p>
                   <p>I also hard coded some commands into the app so that I may conveniently execute certain functions simply by typing in specific keywords preceeded by the '/' symbol, such as setting a timer, or redirecting straight to a specific website.</p>
                   <p>Despite the fact the polysearch engine in its current state is used solely for personal needs and demonstration purposes, I see the potential it has as a more public-facing site - allowing users to specify which search engines should be included in the engine swapper, and what commands can be recognized by the application.</p>
              </div>
            </div>

            <div className="grid-card">
              <div className="grid-card-pane">
                 <img src={crudImg} className='sqr-img' />
              </div>
             
              <div className="grid-card-pane">
                <span>Cruddy Contacts</span>
                   <p>Cruddy Contacts was a proof-of-concept contact manager application. Users were able to store contact information such as first and last name, phone number, and email, for as many people as they liked.</p>
                   <p>I worked on the backend and database layer of this project, and as my first formal, deliverable project, I focused on learning how to build RESTful APIs and a mySQL database from the ground up, while ensuring security vulnerabilities were quashed.</p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  )
}

export default Portfolio
