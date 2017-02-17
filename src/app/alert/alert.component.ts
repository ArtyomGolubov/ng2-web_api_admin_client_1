import { Input, Component, OnInit, ElementRef } from '@angular/core';

export class Alert {
  public text: string;
  public class: string;
  public id: number;
}

export class Alerts {
  private alertsArr: Alert[] = [];
  public testM(id: number): void {};
  public addAlert(alert: Alert) {
    this.alertsArr.push(alert);
    this.testM(alert.id);
  }
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  close(eventSrcElement) {
    console.log(eventSrcElement);
    eventSrcElement.style.height = '0px';
    eventSrcElement.style.padding = '0px';
    eventSrcElement.style.margin = '0px';
    eventSrcElement.style.border = 'none';
    eventSrcElement.style.opacity = '0';
    //event.srcElement.innerText = '';
    eventSrcElement.style.fontSize = '0';
    //this.alerts.splice(event.srcElement.id, 1);
  }

  @Input() alerts: Alerts = new Alerts();
  

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    var self = this;
    this.alerts.testM = function(id) {
      // console.log(self.elementRef.nativeElement.querySelector('li')[id]);
      //setTimeout(self.close(self.elementRef.nativeElement.getElementById(id)), 1000);
      setTimeout(function () {
        console.log(self.elementRef.nativeElement) // здесь нужно получить li  по айдишнику
      },
        1000
      )
    }
  }

}
