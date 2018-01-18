import { Language } from './../domain/enum/language';
import { Injectable } from '@angular/core';
import { ptBr } from '../language/ptBr';
import { en } from '../language/en';

@Injectable()
export class ConfigService {
  public language = new ConfigLanguage();
}

export class ConfigLanguage {
  public language = Language.ptBr;
  public languagesList = [
    ptBr,
    en
  ];

  public getLanguage() {
    return this.languagesList[this.language];
  }
}
