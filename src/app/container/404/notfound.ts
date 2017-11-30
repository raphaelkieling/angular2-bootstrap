import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notfound',
    template: `
        <div>
            <h1>404 Nada foi encontrado</h1>
            <h3>Não foi encotrado nada :(</h3>
        </div>
    `,
    styles: [``]
})
export class NotFoundComponent implements OnInit {
    
    constructor() { }

    ngOnInit() { }
}