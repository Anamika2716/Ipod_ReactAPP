import React from 'react';

import './App.css';
import ZingTouch from 'zingtouch';
import CardFlow from './components/cardflow';
import Game from './components/games';
import Music from './components/music/music';
import Settings from './components/settings';
import Card from './components/card';
class App extends React.Component{
  constructor(){
    super();

    //state of each Component
    this.state={
      showCardFlow:false,
      showMusic:false,
      showGames:false,
      showSettings:false,
      showComponent:false,
      showMusicComponent:false
    }
  }

  //function to handle mouse rotate in menu

  handleGesture=(e)=>{
    const currentState=this;
    var dis=0;

    var region=new ZingTouch.Region(e.target);
    console.log("region", region);
   // console.log("e", e.target);
    region.bind(e.target, 'rotate', function (e)
      {
        console.log("e.detail", e.detail);
        dis = e.detail.distanceFromOrigin;
        console.log("dis", dis);
        //intial card flow id true
        if (dis > 0 && dis < 85) {
          currentState.setState({
            showCardFlow: true,
            showMusic: false,
            showSettings: false
          })
        }
        //making cardflow false and music true
        else if (dis > 85 && dis < 177) {
          currentState.setState({
            showMusic: true,
            showCardFlow: false,
            showSettings: false
          })
        }
        //making show games true
        else if (dis > 177 && dis < 264) {
          currentState.setState({
            showGames: true,
            showSettings: false,
            showMusic: false
          })
        }
        //making settings as true
        else if (dis > 244 && dis < 340) {
          currentState.setState({
                showGames: false,
                showSettings: true,
              }
          )
        }

        //repeating for anti-Clockwise
        if (dis > -90 && dis < 0) {
          currentState.setState({
            showCardFlow: false,
            showSettings: true,
            showGames: false
          });
        } else if (dis > -168 && dis < -90) {
          currentState.setState({
            showGames: true,
            showSettings: false,
            showMusic: false,
            showCardFlow: false
          });
        } else if (dis > -271 && dis < -168) {
          currentState.setState({
            showGames: false,
            showCardFlow: false,
            showMusic: true
          });
        } else if (dis > -340 && dis < -271) {
          currentState.setState({
            showSetting: false,
            showCardFlow: true,
            showMusic: false

          });
        }
        console.log("dis ", dis , currentState);
    })
    console.log("current State", currentState);
  }
  //handle OnClick
  handleClick=()=>{
    this.setState({
      showComponent:true
    })
  }
  //handle menu click

  handleMenuClick=()=>{
    this.setState({
      showComponent:false
    })
  }

  render() {
    const {
      showCardFlow,
      showGames,
      showSettings,
      showMusic,
      showComponent

    } = this.state;
    return (
        <div>.
          <div className="ipodScreen1">,
            <div className="ipodScreen">
              {
                showComponent ? showCardFlow ?
                    <CardFlow handleMenuClick={this.handleMenuClick}/>
                    : showMusic ? <Music handleMenuClick={this.handleMenuClick}/>
                        : showGames ? <Game handleMenuClick={this.handleMenuClick}/>
                            : <Settings handleMenuClick={this.handleMenuClick}/>
                    :
                    <Card
                        showCardFlow={showCardFlow}
                        showGames={showGames}
                        showMusic={showMusic}
                        showSettings={showSettings}
                        handleGesture={this.handleGesture}
                        handleMenuClick={this.handleMenuClick}
                        handleClick={this.handleClick}
                    />
              }
            </div>
          </div>
        </div>
    )
  }

}
export default App;