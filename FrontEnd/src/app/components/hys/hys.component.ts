import { Component, OnInit } from '@angular/core';
import { HyS } from 'src/app/Model/hy-s';
import { SHySService } from 'src/app/service/s-hy-s.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  HyS:HyS[]=[];

  constructor(private sHyS:SHySService,private tokenService:TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged= true;
    }else{
      this.isLogged=false;
    }
  }

  cargarExperiencia(): void {
    this.sHyS.lista().subscribe(data=>{this.HyS=data;})
  }

  delete(id? : number){
    if(id != undefined){
      this.sHyS.delete(id).subscribe(data=>{this.cargarExperiencia();},err=>{alert("No se pudo borrar el skill");})
    }
  }

  parseInt(s1 : string):number{
    var x = s1;
    var y: number = +x;
    return y;
  }

}
