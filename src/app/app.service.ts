/**
 * File created by suenlue on 2019-12-03.
 * Copyright (c) 2019 by netTrek GmbH & Co. KG
 */
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService {
  wertZumSpielen = 123;
  private generated: Date;

  constructor() {
    this.generated = new Date ();
  }
}
