 import React, { Component } from 'react';

  class Album extends Component {
<<<<<<< HEAD
   constructor(props) {
     super(props);

     const album = albumData.find( album => {
       return album.slug === this.props.match.params.slug
     });
       const songs = albumData.find( album => {
       return album.songs
     })
 
     this.state = {
       album: album,
       songs: songs
     };
   }

   render() {
     return (
       <section className="album">
         <section id="album-info">
           <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title} />
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
            </div>
         </section>
         <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>  
           <tbody>
           {
            this.state.album.songs.map((song,index)=>
            <tr className="song-details" key={index}>
              <td className="song-actions">
                 <button>
                   <span className="song-number">{index+1}</span>
                   <span className="ion-play"></span>
                   <span className="ion-pause"></span>
                 </button>
              </td>
              <td className="song-title">{song.title}</td>
              <td className="song-duration">{song.duration}</td>
            </tr>)
          }
           </tbody>
         </table>

   render() {
     return (
       <section className="Album">
         {this.props.match.params.slug} Album will go here 
       </section>
     );
   }
 }

export default Album;