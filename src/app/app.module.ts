import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component(
{
selector: "admin",
templateUrl: "./admin.component.html",
})

export class AdminAccount
{
adminUser = document.cookie.split("??")[0];
adminPass = document.cookie.split("??")[1];

constructor(public router: Router)
{
    if (document.cookie !== undefined)
    {
        if (this.adminUser == "admin" && this.adminPass == "admin")
        {
            console.log("Welcome!");
        }
        else
        {
            this.router.navigate(["Loginform"]);
            console.log("Redirect!");
        }
    }
    else
    {
        console.log("Error: Undefined Login!");
    }
}
}