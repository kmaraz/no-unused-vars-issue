import { Component } from '@angular/core';
import { Test } from './Test';

@Component({})
export class Index {

  constructor(public thisWorks: Test) { // thisWorks is different from Test

  }
}
