import { Component, Input } from '@angular/core';
import { Link } from '../../../d3';

@Component({
  selector: '[linkVisual]',
  template: `
    <svg:line
        class="link"
        [attr.x1]="_sx"
        [attr.y1]="_sy"
        [attr.x2]="_tx"
        [attr.y2]="_sy"
    ></svg:line>
  `,
  styleUrls: ['./link-visual.component.css']
})
export class LinkVisualComponent  {
  // @Input('linkVisual') link!: Link;

  // [attr.x1]="_sx"
  // [attr.y1]="_sy"
  // [attr.x2]="_tx"
  // [attr.y2]="_sy"

  // [attr.x1]="link.source.x"
  // [attr.y1]="link.source.y"
  // [attr.x2]="link.target.x"
  // [attr.y2]="link.target.y"

  private _link!: Link;
  protected _sx: number = 0;
  protected _sy: number = 0;
  protected _tx: number = 0;
  protected _ty: number = 0;

  @Input('linkVisual') 
  public get link() {
    return this._link;
  }
  public set link(value: Link) {
    if (value.source as Node) {this._sx = value.source.x}

    this._link = value;
  }
}