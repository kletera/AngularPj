import { Route } from "@angular/router";

export const TP_ROUTES : Route[] = [
    {
        path:'',
        loadComponent:()=>import('./tp-home/tp-home').then(m=>m.TpHome)
    },
    {
        path:'tp-directives',
        loadComponent:()=>import('./tp-directives/tp-directives').then(m=>m.TpDirectives)
    },
    {
        path:'tp-component-communication',
        loadComponent:()=>import('./tp-component-communication/tp-component-communication').then(m=>m.TpComponentCommunication)
    },
]