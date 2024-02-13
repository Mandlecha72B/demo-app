import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, CustomSidenavComponent]
})
export class AppComponent {
  title = 'demo-app';
  
  collapsed = signal(false);
  sideNavWidth = computed(()=> !this.collapsed() ? '65px':'250px')
  icon = 'menu'
  changeIcon(){
    if(!this.collapsed()){
      this.icon = 'menu'
    }
    if(this.collapsed()){
      this.icon = 'close'

    }

  }

}
