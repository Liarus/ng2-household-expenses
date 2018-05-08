import { Injectable } from '@angular/core';

import { AppConfig } from '../models/appConfig.model';
import { RunMode } from '../enums/runMode.enum';

@Injectable()
export class AppConfigProd implements AppConfig {
    BASE_URL = 'http://xxx';
    RunMode: RunMode = RunMode.Prod;
}
