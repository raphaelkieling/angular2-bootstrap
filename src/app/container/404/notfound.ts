import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notfound',
    template: `
        <div style="text-align:center;margin-top:90px">
            <img src="assets/img/cactus.png">
            <br><br>
            <h1>404 Not Found</h1>
            <h3>Nothing to see :(</h3>
            <p><a href="#">Go to home</a></p>
        </div>
    `,
    styles: [``]
})
export class NotFoundComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}
