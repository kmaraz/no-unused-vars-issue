import { Component } from '@angular/core';
import { Test } from './Test';

@Component({})
export class Index {

  constructor(public Test: Test) { // Variable has the same name as type declaration

  }
}
