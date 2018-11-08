import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { OrderWithMeSharedLibsModule, OrderWithMeSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [OrderWithMeSharedLibsModule, OrderWithMeSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [OrderWithMeSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrderWithMeSharedModule {}
