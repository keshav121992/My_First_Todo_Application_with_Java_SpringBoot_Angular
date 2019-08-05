import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //message : string = 'Some Welcome Message'
  welcomeMessageFromService: string
  name = ''
  constructor(
    private route: ActivatedRoute,
    private welcomeData: WelcomeDataService,
    ) { }

  ngOnInit() {
    //Compilation Error this.message= 5;
    //console.log(this.message);
    //console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name']
  }

  //in this method we are having asynshronus call so when response coming
  //back from server we are customizing the response and sending back to the 
  //browser
  getWelcomeMessageWithParamaeter() {
    //console.log("Most Welcome");
    console.log(this.welcomeData.executeHelloWorldWelcomeService(this.name));
    this.welcomeData.executeHelloWorldWelcomeService(this.name).subscribe(response=>
      this.handleSuccessFullResponse(response));
      console.log('last line GetWelcomeMessage')
  }

  handleSuccessFullResponse(response){
    this.welcomeMessageFromService = response.message    
    //console.log(response);
    //console.log(response.message);
  }

}

// export class Welcome1 {

// }
