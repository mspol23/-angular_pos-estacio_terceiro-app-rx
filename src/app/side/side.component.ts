import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent implements OnInit {

  @Input() pagina: string = "Undefined"
  acesso: string = ""

  constructor(){}

  addZero = (x: number) => (x>9) ? `${x}` : `0${x}`;

  formatDate(d: Date): string {
    var dataStr = "";
    dataStr += this.addZero(d.getDate())+"/"
    +this.addZero(d.getMonth()+1)+"/"
    +d.getFullYear()+" "
    +this.addZero(d.getHours())+":"
    +this.addZero(d.getMinutes())+":"
    +this.addZero(d.getSeconds());

    return dataStr;
  }

  ngOnInit(): void {
      let d: Date = new Date();
      this.acesso = this.formatDate(d)
  }
}
