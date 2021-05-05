import { Incredient } from "../shared/ingredients.model";

export class Recipe{
public name:string;
public description:string;
public imgpath:string;
public incredients:Incredient[];

constructor(name:string,desc:string,imgpath:string,incredients:Incredient[]){
this.name=name;
this.description=desc;
this.imgpath=imgpath;

this.incredients=incredients;

}
}
