import { Component, Output,EventEmitter } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

   @Output() featureselected= new EventEmitter<string>();
    onselect(feature:string)
    {
        this.featureselected.emit(feature);
    }
}