import { NotesService } from './../services/notes-service/notes.service';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import {
  REFRESH_ICON,
  SETTING_ICON,
  MENU_ICON,
  IMG_ICON,
  COLOR_PALATTE_ICON,
  LIST_VIEW_ICON,
  OTHER_MENU_ICON,
  SEARCH_ICON,
  MORE_ICON,
  MENU_ICON1,
  PROFILE
} from '../../assets/svg.icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  itemList: any;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private dataService: DataService,
  ) {
    iconRegistry.addSvgIconLiteral(
      'refresh-icon',
      sanitizer.bypassSecurityTrustHtml(REFRESH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'setting-icon',
      sanitizer.bypassSecurityTrustHtml(SETTING_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'menu-icon',
      sanitizer.bypassSecurityTrustHtml(MENU_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'profile-icon',
      sanitizer.bypassSecurityTrustHtml(PROFILE)
    );
    iconRegistry.addSvgIconLiteral(
      'img-icon',
      sanitizer.bypassSecurityTrustHtml(IMG_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'color-palatte-icon',
      sanitizer.bypassSecurityTrustHtml(COLOR_PALATTE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'list-view-icon',
      sanitizer.bypassSecurityTrustHtml(LIST_VIEW_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'other-menu-icon',
      sanitizer.bypassSecurityTrustHtml(OTHER_MENU_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'search-icon',
      sanitizer.bypassSecurityTrustHtml(SEARCH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'more-icon',
      sanitizer.bypassSecurityTrustHtml(MORE_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'menu-icon1',
      sanitizer.bypassSecurityTrustHtml(MENU_ICON1)
    );
  }
  ngOnInit(): void {}
  onSearch() {
    console.log(this.searchText);

      this.dataService.updateData(this.searchText);

  }

  logOut() {
    localStorage.removeItem('access_token');
    window.location.href = ' ';
  }
}
