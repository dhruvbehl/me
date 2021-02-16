import React, { Component } from 'react';
import {
   Container,
   Header,
   Image,
} from 'semantic-ui-react';
class About extends Component {
  render() {

    return (
      <div className={'navbar-color-bg'} id={'about'}>
      <Container style={{ textAlign: 'center' }} id={'jack'}>
          <Header as='h1' inverted>
              <p className={'headings'} style={{'color': 'green'}}>Jack of all trades !</p>
          </Header>
          <br/>
          <Image src={'/me/images/JackOfAllTrades.jpg'} style={{ 'maxHeight':'60vh'}}></Image>
          <br/><br/>
          <Container style={{'paddingLeft': '20px', 'paddingRight': '20px'}}>
            <Header as='h5' style={{'color': 'white'}}>
            I was born in the <b style={{'color': 'green'}}>"City of Nawabs"</b> Lucknow, India,
            I come from a very middle class family background, with the aspiration to leave an impact into the world.
            Since my childhood I have been an interactive person who likes telling stories so here are few stories of my life.
            I have a big social circle and different people know me by my different talents I possess.
            Some know me as a <b style={{'color': 'green'}}>Musician</b>, few know me to be a <b style={{'color': 'green'}}>Fitness enthusiast</b>,
            there are some folks who like me for the <b style={{'color': 'green'}}>Foodie and Cook</b> I am and some know me to be a <b style={{'color': 'green'}}>Software Engineer</b>.
            </Header><br/>
            <Header as='h5' style={{'color': 'green', textAlign: 'center'}}>"I am a Jack of all trades who wants to spend his life mastering skills one by one "</Header>
         </Container>
      </Container>
      <div className="or-separator"/>
      <Container style={{ textAlign: 'center', paddingTop: '150px' }} id={'music'}>
          <Header as='h1' inverted>
              <p className={'headings'} style={{'color': 'green'}}>Musically me !</p>
          </Header>
          <br/>
          <video controls preload="auto" src={"/me/images/musicallyme.mp4"} style={{ maxHeight: '50vh', paddingRight:'40px' }}/>
          <video controls preload="auto" src={"/me/images/musicallyme1.mp4"} style={{ maxHeight: '50vh', paddingRight:'40px' }}/>
          <video controls preload="auto" src={"/me/images/girlslikeyou.mp4"} style={{ maxHeight: '50vh', paddingRight:'40px' }}/>
          <br/>
          <Header as='h5' style={{'color': 'green', textAlign: 'center'}}>A small glimpse into journey of a song, right from <b style={{'color': 'white'}}>conception</b>, <b style={{'color': 'white'}}>recording</b> to <b style={{'color': 'white'}}>final production</b></Header><br/>
          <Header as='h5' style={{'color': 'green', textAlign: 'center'}}>Sit back and enjoy!</Header>
          <br/><br/>
          <Container style={{'paddingLeft': '20px', 'paddingRight': '20px'}}>
            <Header as='h5' style={{'color': 'white', textAlign: 'center'}}>
            I remember being in touch with my musical side for as long as I can remember, my mother tells me that I actually used to move to music even when I was an year old kid. I remember the feeling of performing for the first time on stage, that nervousness and anxiety turned to a sense of calm and excitement as I kept on and since then I have been known as a musician where ever I go. I am used to performing for crowds, thats probably where I get my sense of connecting with people and creating an impact in their minds in whatever I do.
 I taught myself 5 different instruments including Guitar, Ukelele, Piano, Cajon and drums. I also can write, produce and engineer music. Currently I have an instagram channel where I post all my originals and covers.
            </Header><br/>
         </Container>
      </Container>
      <div className="or-separator"/>
      <Container style={{ textAlign: 'center', paddingTop: '150px' }} id={'50lbs'}>
          <Header as='h1' inverted>
              <p className={'headings'} style={{'color': 'green'}}>My journey between 50 lbs !</p>
          </Header>
          <br/>
          <Container style={{'paddingLeft': '20px', 'paddingRight': '20px'}}>
          <video controls preload="auto" src={"/me/images/50lbs.mp4"} style={{ maxHeight: '50vh'}}/>
            <br/><br/>
            <Header as='h5' style={{'color': 'white'}}>
               I couldn't have better documented this very rewarding and life changing moment into words, hence tried to capture an year as a glimpse in a small video.
            </Header><br/>
            <Header as='h5' style={{'color': 'green', textAlign: 'center'}}>"I want to see what happens if I don't giveup"</Header>
         </Container>
      </Container>
      <div className="or-separator"/>
      <Container style={{ textAlign: 'center', paddingTop: '150px' }} id={'gallery'}>
          <Header as='h1' inverted>
              <p className={'headings'} style={{'color': 'green'}}>Gather memories not things !</p>
          </Header>
          <br/>
          <Container style={{'paddingLeft': '20px', 'paddingRight': '20px'}}>
            <a class="lightbox" href="#family">
               <img alt='My Family' style={{minHeight: '30vh'}} src="/me/images/g1.jpg"/>
            </a>
            <div class="lightbox-target" id="family">
               <img alt='My Family' style={{minHeight: '30vh'}} src="/me/images/g1.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>

            <a class="lightbox" href="#centurion">
               <img alt='My first centurion ride' style={{minHeight: '30vh'}} src="/me/images/g2.jpg"/>
            </a>
            <div class="lightbox-target" id="centurion">
               <figure></figure>
                  <img alt='My first centurion ride' style={{minHeight: '30vh'}} src="/me/images/g2.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>

            <a class="lightbox" href="#udaipur">
               <img alt='Udaipur, India' style={{minHeight: '30vh'}} src="/me/images/g3.jpg"/>
            </a>
            <div class="lightbox-target" id="udaipur">
               <img alt='Udaipur, India'  style={{minHeight: '30vh'}} src="/me/images/g3.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>

            <a class="lightbox" href="#thar">
               <img alt='Thar dessert, India'  style={{minHeight: '30vh'}} src="/me/images/g4.jpg"/>
            </a>
            <div class="lightbox-target" id="thar">
               <img alt='Thar dessert, India' style={{minHeight: '30vh'}} src="/me/images/g4.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>

            <a class="lightbox" href="#himalayas1">
               <img alt='The Himalayas, India' style={{minHeight: '30vh'}} src="/me/images/g5.jpg"/>
            </a>
            <div class="lightbox-target" id="himalayas1">
               <img alt='The Himalayas, India' style={{minHeight: '30vh'}} src="/me/images/g5.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>

            <a class="lightbox" href="#himalayas2">
               <img alt='The Himalayas, India' style={{minHeight: '30vh'}} src="/me/images/g6.jpg"/>
            </a>
            <div class="lightbox-target" id="himalayas2">
               <img alt='The Himalayas, India' style={{minHeight: '30vh'}} src="/me/images/g6.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>

            <a class="lightbox" href="#leh">
               <img  alt='Leh, India' style={{minHeight: '30vh'}} src="/me/images/g7.jpg"/>
            </a>
            <div class="lightbox-target" id="leh">
               <img  alt='Leh, India' style={{minHeight: '30vh'}} src="/me/images/g7.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>

            <a class="lightbox" href="#khardungla">
               <img alt='Bike trip to highest motorable road in the world' style={{minHeight: '30vh'}} src="/me/images/g8.jpg"/>
            </a>
            <div class="lightbox-target" id="khardungla">
               <img alt='Bike trip to highest motorable road in the world' style={{minHeight: '30vh'}} src="/me/images/g8.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>

            <a class="lightbox" href="#magnetic">
               <img alt='Magnetic road in Leh, India' style={{minHeight: '30vh'}} src="/me/images/g9.jpg"/>
            </a>
            <div class="lightbox-target" id="magnetic">
               <img alt='Magnetic road in Leh, India' style={{minHeight: '30vh'}} src="/me/images/g9.jpg"/>
               <a class="lightbox-close" href="#gallery"></a>
            </div>
            <br/><br/>
         </Container>
      </Container>
  </div>
    );
  }
}

export default About;
