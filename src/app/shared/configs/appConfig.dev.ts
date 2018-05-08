import { Injectable } from '@angular/core';

import { AppConfig } from '../models/appConfig.model';
import { RunMode } from '../enums/runMode.enum';

@Injectable()
export class AppConfigDev implements AppConfig {
    BASE_URL = 'http://localhost:57646';
    RunMode: RunMode = RunMode.Dev;
}
