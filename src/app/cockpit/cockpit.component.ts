import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  servername='';
  servercontent='';
 
 @Output() servercreated=new EventEmitter<{ name: string; content: string; }>();
  @Output() blueprintcreated=new EventEmitter<{ name: string; content: string; }>();
  constructor() { }

  ngOnInit(): void {
  }
  AddServer(servername_localreference:HTMLInputElement){
   
    this.servercreated.emit({
      // name:this.servername,
      name:servername_localreference.value,
      content:this.servercontent
    });
    // this.serverelements.push({
    // type:'server',
    // name:this.servername,
    // content:this.servercontent
    // });
  //  console.log(this.serverelements[0].name);
  }

  AddBlueprint(){
    this.blueprintcreated.emit({
      name:this.servername,
      content:this.servercontent
    });
    // this.serverelements.push({
    // type:'blueprint',
    // name:this.servername,
    // content:this.servercontent
    // });
  }
}
