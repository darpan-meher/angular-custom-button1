import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  onButtonClick(event: any) {
    console.log(event?.target?.innerText + " is clicked");
  }
}
