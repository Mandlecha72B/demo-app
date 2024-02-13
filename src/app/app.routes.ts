import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConnectionComponent } from './pages/connection/connection.component';
import { QueryComponent } from './pages/query/query.component';
import { QueryparameterComponent } from './pages/queryparameter/queryparameter.component';
import { DatasourcesComponent } from './pages/datasources/datasources.component';
import { ExportformatsComponent } from './pages/exportformats/exportformats.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { ExelogComponent } from './pages/exelog/exelog.component';
import { ExerequestComponent } from './pages/exerequest/exerequest.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'connection',
        component:ConnectionComponent
    },
    {
        path:'query',
        component:QueryComponent
    },
    {
        path:'queryparameter',
        component:QueryparameterComponent
    },
    {
        path:'datasources',
        component:DatasourcesComponent
    },
    {
        path:'exportformats',
        component:ExportformatsComponent
    },
    {
        path:'destinations',
        component:DestinationsComponent
    },
    {
        path:'exerequest',
        component:ExerequestComponent
    },
    {
        path:'exelog',
        component:ExelogComponent
    },
];
