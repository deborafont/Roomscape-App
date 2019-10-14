import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FilterService {

  currentRoomscape;
  doneRooms=[];
  saveRooms = [];


  constructor() {}

  setRoomscape(roomscape){
    this.currentRoomscape = roomscape;
    console.log("se ha guardado bien",this.currentRoomscape);
  }

  getRoomscape(){
    return this.currentRoomscape; 
  }

  addDoneRoom(room) {
    this.doneRooms.push(room);
    room.done = true;
    console.log("Los favoritos son: ", this.doneRooms);
  }

  removeDone(room) {
    room.done = false;
    this.doneRooms.map((currElement, index) => {
      if(currElement.roomname === room.roomname){
        this.doneRooms.splice(index,1);
      }
    });
    console.log("Los favoritos son: ", this.doneRooms);
  }

  getDoneRooms() {
    return this.doneRooms;
  }






  addSaveRoom(room) {
    this.saveRooms.push(room);
    room.save = true;
    console.log("Los favoritos son: ", this.saveRooms);
  }

  removeSave(room) {
    room.save = false;
    this.saveRooms.map((currElement, index) => {
      if(currElement.roomname == room.roomname){
        this.saveRooms.splice(index,1);
      }
    });
    console.log("Los favoritos son: ", this.saveRooms);
  }

  getSaveRooms() {
    return this.saveRooms;
  }


}


