# Kendo-UI-for-Angular-learning
## guide:
https://www.telerik.com/kendo-angular-ui/getting-started/#toc-project-setup

`npm install -g @angular/cli`
`ng new my-first-angular-project --style=scss`
`cd my-first-angular-project`

Let's start simple and add the Buttons package:
npm install --save @progress/kendo-angular-buttons @progress/kendo-angular-l10n

If you use Angular 6, install the rxjs-compat dependency.
To upgrade your existing Kendo UI for Angular project to Angular 6, refer to the article on using with Angular 6.
npm install --save rxjs-compat@6

Next, import the component directives into your source code. Change the code in src/app/app.module.ts to:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        // Register the modules
        BrowserAnimationsModule,
        ButtonsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

Add the HTML for the button in src/app/app.component.html:
<h1>{{title}}</h1>
<button kendoButton (click)="onButtonClick()" [primary]="true">My Kendo UI Button</button>

Add the button click event handler to app.component.ts:
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Hello World!';

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}

We'll take the Default theme and install it just like the Buttons package:
npm install --save @progress/kendo-theme-default

Now, import the SCSS file from the package in src/styles.scss:
@import "~@progress/kendo-theme-default/scss/all";