import { Component ,OnInit,OnDestroy} from '@angular/core';
import { Authservice } from 'src/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authservice:Authservice){}
    ngOnInit()
    {
      this.authservice.AutoLogin();
      //console.log("ngOnInit called");
      
    }
    // loadedfeature:string='recipe';
    // onnavigate(feature:string)
    // {
    //   this.loadedfeature=feature;
    // }
  //   ngOnDestroy()
  //   {
  //     console.log("ngOnDestroy called");
      
  //   }
  // serverelements=[{type:'server',name:'test',content:'test content'}];

 
  // OnServerAdded(serverdata:{name:string,content:string}){
   
    
  //   this.serverelements.push({
  //   type:'server',
  //   name:serverdata.name,
  //   content:serverdata.content
  //   });
 
  // }

  // OnBluepriniAdded(blueprintdata:{name:string,content:string})
  // {
  //   this.serverelements.push({
  //     type:'blueprint',
  //     name:blueprintdata.name,
  //     content:blueprintdata.content
  //     });
  // }

  // Oncomponentdestroy()
  // {
  //   this.serverelements.splice(0,1);
  // }

  title = 'recipie-app';
}
