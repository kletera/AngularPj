import { Route } from "@angular/router";

export const EXERCICES_ROUTES : Route[] = [
    { 
        path:'',
        loadComponent:()=>import('./exercices-home/exercices-home').then(m=>m.ExercicesHome),
    },
    {
        path:'ex-text-interpolation',
        loadComponent:()=>import('./ex-text-interpolation/ex-text-interpolation').then(m=>m.ExTextInterpolation),
    },
    {
        path:'ex-attribute-binding',
        loadComponent:()=>import('./ex-attribute-binding/ex-attribute-binding').then(m=>m.ExAttributeBinding),
    },
    {
        path:'ex-event-binding',
        loadComponent:()=>import('./ex-event-binding/ex-event-binding').then(m=>m.ExEventBinding),
    },
    {
        path:'ex-http-module-api',
        loadComponent:()=>import('./ex-http-module-api/ex-http-module-api').then(m=>m.ExHttpModuleApi),
    },
]