import { Component, Input } from "@angular/core";
import {TestBed} from "@angular/core/testing";
import { MatIcon, MatIconModule } from "@angular/material/icon";

@Component({
  selector: "mat-icon",
  template: "<span></span>",
})
export class MockMatIconComponent {
  @Input() public svgIcon: any;
  @Input() public fontSet: any;
  @Input() public fontIcon: any;
}

export function overrideIconModule(testBed: TestBed): TestBed {
  return testBed.overrideModule(MatIconModule, {
    remove: {
      declarations: [MatIcon],
      exports: [MatIcon],
    },
    add: {
      declarations: [MockMatIconComponent],
      exports: [MockMatIconComponent],
    },
  });
}
