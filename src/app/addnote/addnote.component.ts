import { Component, OnInit } from '@angular/core';
import { IMG_ICON, BRUSH_ICON, TICK_ICON } from '../../assets/svg.icons';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.scss'],
})
export class AddnoteComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral(
      'img-icon',
      sanitizer.bypassSecurityTrustHtml(IMG_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'brush-icon',
      sanitizer.bypassSecurityTrustHtml(BRUSH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'tick-icon',
      sanitizer.bypassSecurityTrustHtml(TICK_ICON)
    );
  }

  ngOnInit(): void {}
}
