import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon?: string;
    subMenus?: SubMenuItems[];
}

export interface SubMenuItems {
    state: string;
    name: string;
    type: string;
}

const HEADERMENUITEMS = [
    {
        state: "home",
        name: "Home",
        type: "link"
    },
    {
        state: "",
        name: "Personal",
        type: "sub",
        icon: "fa fa-caret-down",
        subMenus: [
            { state: "about", name: "About", type: "link" },
            { state: 'gallery', name: 'Gallery', type:"link"},
            { state: 'resume', name: 'Resume', type:"link"},
            { state: 'cars', name: 'Cars', type:"link"}        ]
    }
];

@Injectable()
export class MenuItems {
    getMainMenu(): Menu[] {
        return HEADERMENUITEMS;
     }
}