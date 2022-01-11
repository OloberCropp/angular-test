import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { objectData } from '../../../sourse';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  filteredData: any;
  tabsTemplate = ['income', 'outcome', 'loan', 'investment'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      if(params['tab'])this.toggleContent(params['tab'])
    })
  }

  generateAmount(element:object){
    return{...element, amount : (Math.round(Math.random()*400000+1) / 100).toString()}
  }
  
  toggleContent(key: any){

    this.router.navigate(['navigator'], {queryParams:{'tab': key}});

    this.filteredData = objectData.data.filter(person => person.type === this.tabsTemplate[parseInt(key)])
      .map(element => this.generateAmount(element));
  }


}
