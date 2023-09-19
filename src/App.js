import logo from './logo.svg';
import './App.css';

function Maintanance() {
  return (
    <div className="maintanance-screen">
    <h1 className='maintanance-title'>This site is under construction</h1>
    <p className='maintanance-description'>This site is courtesy of Future eSports</p>
    <div className='img-holder '>
      <img className="fesports-logo" src="./media/logo.png" />
      <img className="fesports-credits" src="./media/credit.png" />
    </div>
    <a href="https://wa.me/7510591162" className='dev-contact'>Contact Dev</a>
</div>
  )
}

function Main() {
  return (
    <div className='main'>
      <header>
        <nav>
          <img className="nav-logo" src="./media/logo.png" />
          <ul className='nav-ul'>
            <li className='nav-li'>
              <a href="https://chat.whatsapp.com/BGwYDZjdCMQ36SW3AaHyVm">Join Now</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className='sec-1'>
        <div class='games-img'>
          <img className="img-cod" src="https://codm.garena.com/static/images/Main-page/P1/main-kv.jpg" />
          <img className='img-bgmi' src="https://www.insidesport.in/wp-content/uploads/2023/06/banners.jpeg"/>
          <img className='img-ff' src="https://venturebeat.com/wp-content/uploads/2020/05/Garena-Free-Fire.jpg"/>
          <img className='img-efootball' src="https://img6.fresherslive.com/latestnews/2023/06/efootball-2023-maintenance-end-time-64816996557c691033837-900.webp"/>
          <div className='icon-holder-circle'>
            <img src="./media/icon_initial.png" />
          </div>
          
        </div>
        <div className='sec-1-content'>
        <h1>Dive into the world of mobile eSports</h1>
        <p>Join Our Whatsapp Group</p>
        <a href="https://chat.whatsapp.com/BGwYDZjdCMQ36SW3AaHyVm"><b>Join Now</b></a>
        </div>
      </section>
      <section className='sec-2'>
        <div className='prev-event-left prev-event'>

        </div>
        <div className='prev-event-main prev-event'> 
          <h3 className='text'>eFootball Super8 Tourney</h3>
          <div className='prev-event-img-holder'>
            <img src="./media/event_1_winner.png"></img>
          </div>
        </div>
        <div className='prev-event-right prev-event'>

        </div>
      </section>
      <section className='sec-3'>
        <h2 className='text'>Top Players</h2>
        <div className='top-players-holder'>
          <div className='top-player tp1'>
            <p>1</p><h3 className='text'>Zio Zidane</h3>
          </div>
          <div className='top-player tp2'>
            <p>2</p><h3 className='text'>LilSoman69</h3>
          </div>
          <div className='top-player tp3'>
            <p>3</p><h3 className='text'>Dheeraj</h3>
          </div> 
        </div>
      </section>
    </div>
  )
}

function App() {
  const in_debugging = false
  return (
    <>
    {
      in_debugging ? (<Maintanance />) : (<Main />)
    }

    </>
  );
}

export default App;
