import { Language } from './../domain/enum/language';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  public language = Language.ptBr;
}
