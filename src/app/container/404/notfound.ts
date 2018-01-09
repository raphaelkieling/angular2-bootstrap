import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notfound',
    template: `
        <div>
            <h1>404 Not Found</h1>
            <h3>Nothing to see :(</h3>
        </div>
    `,
    styles: [``]
})
export class NotFoundComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
