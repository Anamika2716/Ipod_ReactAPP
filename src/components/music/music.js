import React from 'react';

import ZingTouch from 'zingtouch';
import Playlist from './playlist';
import Artist from './artist';
import Song from './song';

class Music extends React.Component{

     constructor()
     {
         super();
         this.state={
             showArtist:false,
             showPlaylist:false,
             showSongs:false,
             showMusicComponent:false

         }
     }
     handleGesture=(e)=>{
         const currentState=this;
         var dis=0;
         var region=new ZingTouch.Region(e.target);
         console.log("region", region);
         
         region.bind(e.target, 'rotate', function (e) {
             dis=e.detail.distanceFromOrigin;
             console.log("dis in music",dis);
             // setting active state based on condition
             if(dis>0 && dis<85)
             {
                 currentState.setState({

                     showSongs:true,
                     showArtist:false,
                     showPlaylist:false
                 })
             }
             else if(dis>85 && dis<177 )
             {
                 currentState.setState({

                     showSongs:false,
                     showArtist:true,
                     showPlaylist:false
                 })
             }
             else if (dis>177 && dis<264 )
             {
                 currentState.setState({

                     showPlaylist:true,
                     showArtist:false
                 })
             }
             else if(dis>244 && dis < 340)
             {
                 currentState.setState({

                     showPlaylist:true,
                     showArtist:false,
                     showSongs:false
                 })
             }

             if(dis>-90 && dis<0)
             {
                 currentState.setState({

                     showArtist:true,
                     showPlaylist:false,
                     showSongs:false
                 });
             }
             else if(dis>-168 && dis<-90)
             {
                 currentState.setState({

                     showSongs:true,
                     showArtist:false
                 });
             }
         })
     }
     handleEnter=()=>{
         this.setState({
            showMusicComponent:true
         });
     }
     handlemenuClick=()=>{

         const {showMusicComponent}=this.state;
         const {handleMenuClick}=this.props;
         if(!showMusicComponent) handleMenuClick();
         else this.setState({
             showMusicComponent:false
         });
     }
     render() {
         const{
             showArtist ,
             showMusicComponent,
             
             showPlaylist,showSongs}=this.state;
         return(
             <div>
                 {/*//render diff components based on conditions*/}
                 {showMusicComponent ? showSongs ? <div className='card2'><Song handleMenuClick={this.handlemenuClick}/></div> : showArtist ?
                     <div className='card2'><Artist handleMenuClick={this.handlemenuClick}/></div> : <div className='card2'><Playlist handleMenuClick={this.handlemenuClick}/></div>

                     :

                     <div className='card'>
                         <span className='title'>Music</span>
                         <div className={`card-list ${showSongs ? 'active' : ''}`}>
                             All songs
                         </div>
                         <div className={`card-list ${showArtist ? 'active' : ''}`}>
                             Artist
                         </div>
                         <div className={`card-list ${showPlaylist ? 'active' : ''}`}>
                             Playlist
                         </div>
                     </div>
                 }
                 <div className='ipod-wheel' onClick={this.handleGesture}>

                     <div className='menu'>
                         <button className='btn' onClick={this.handlemenuClick}>Menu</button>
                     </div>
                     <button className='enter' onClick={this.handleEnter}>Enter</button>


                 </div>


             </div>
         )
     }

                 }

export default Music;