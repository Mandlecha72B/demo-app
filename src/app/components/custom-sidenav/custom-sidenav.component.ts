import { Component, Input, computed, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
export type MenuItem = {
  icon: string;
  label: string;
  routelink: string;

}
@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [CommonModule,MatListModule, MatIconModule, RouterModule],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})


export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val:boolean){
    this.sideNavCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
    
      icon:'home',
      label:'Home',
      routelink:''
  

    },
    
    {
      icon:'usb',
      label:'Connection',
      routelink:'connection'

    },
    {
    
      label:'Query',
      icon:'speaker_notes',
      routelink:'query'

    },
    {
      
      label:'Query_Parameters',
      icon:'help',
      routelink:'queryparameter'

    },
    
    {
      
      label:'Database_Sources',
      icon:'dns',
      routelink:'datasources'

    },
    {
     
      label:'Export_Formats',
      icon:'attach_file',
      routelink:'exportformats'

    },
    {
     
      label:'Destinations',
      icon:'contact_mail',
      routelink:'destinations'

    },
    {
     
      label:'Execution_request',
      icon:'code',
      routelink:'exerequest'

    },
    {

      label:'Execution_log',
      icon:'home',
      routelink:'exelog'

    }
    
  ]);

  profilePicSize = computed(() => !this.sideNavCollapsed() ? '33px' : '100px');
  
  sideHeight = computed(() => !this.sideNavCollapsed() ? 'calc(100vh - 136px)' : 'calc(100vh - 236px)');

}
