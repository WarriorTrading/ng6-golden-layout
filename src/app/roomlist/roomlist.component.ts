import { Component, OnInit } from '@angular/core';

import {
  GoldenLayoutService,
} from '@warriortrading/ng-golden-layout';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.scss']
})


export class RoomlistComponent implements OnInit {
  constructor(private srv: GoldenLayoutService) { 
    console.log("RoomlistComponent constructor")
  }

  openRoom(roomId: number) {
    const stackOpt = {
      type: 'stack',
      id: 'stack-room-' + roomId,
    }
    const componentOpt = {
      type: 'component',
      id: 'room-' + roomId,
      title: "room-" + roomId
    }

    const stack = this.srv.addStack(this.srv.childOfRoot(), stackOpt);
    this.srv.addComponent(stack, this.srv.getRegisteredComponent('room'), componentOpt);
  }

  ngOnInit() {
    console.log("RoomlistComponent ngOnInit")
    let items = this.srv.filterItems(item => {
      return (item.type === 'component' && item.hasId('component-roomlist'))
    })
    if (items.length > 0) {
      console.debug('My id is', items[items.length - 1].config.id, ', name is', items[items.length - 1].config.title)
    }
  }

}
