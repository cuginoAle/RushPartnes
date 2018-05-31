import Pusher from 'pusher-js';
import { Observable } from 'rxjs/Observable';
import axios from 'axios';

//the API url
const API = 'http://lineups.dev.fantech.io',

//creating an new Pusher instance
  pusherClient = new Pusher(
    '6a3acdaba86ad858948b', {
      cluster: 'eu'
    }
  ),

//subscribing to the channel
  channel = pusherClient.subscribe("lineups"),

// creating an observable to get a consistent interface for data events
  observableData = Observable.create(function (observer) {
    
    //fetching data from the API end point
    axios.get(API)
      .then(result => {
        console.log("Axios data received!");
        observer.next(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    // getting updates using Pusher
    channel.bind('lineup-updated', data => {
      console.log("Pusher data received!");
      observer.next(data);
    })


  });

export default observableData;