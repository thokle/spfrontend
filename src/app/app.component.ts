import {Component, ViewChild} from '@angular/core';
import {IgxNavbarComponent, IgxNavigationDrawerComponent} from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('')
  public  igx: IgxNavbarComponent;

  public navItems = [
    { name: 'Opret Ejer', text: 'Opret Ejer', routerlink: 'createowner'},
    { name: 'Login', text: 'Login ' , routerlink: 'login' },
    { name: 'group_work', text: 'Opret medlem' , routerlink: 'createmember'} ,
    { name: 'group_work1', text: 'Klub' }
  ];

public selected = 'Avatar';

@ViewChild(IgxNavigationDrawerComponent, { static: true })
public drawer: IgxNavigationDrawerComponent;

public navigate(item): void {
  this.selected = item.text;
  this.drawer.close();
}
}
