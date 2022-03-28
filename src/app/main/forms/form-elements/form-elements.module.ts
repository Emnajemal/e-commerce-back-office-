import { NgModule } from '@angular/core';

import { CheckboxModule } from 'app/main/forms/form-elements/checkbox/checkbox.module';
import { DateTimePickerModule } from 'app/main/forms/form-elements/date-time-picker/date-time-picker.module';
import { InputGroupsModule } from 'app/main/forms/form-elements/input-groups/input-groups.module';
import { InputMaskModule } from 'app/main/forms/form-elements/input-mask/input-mask.module';
import { InputModule } from 'app/main/forms/form-elements/input/input.module';
import { NumberInputModule } from 'app/main/forms/form-elements/number-input/number-input.module';
import { RadioModule } from 'app/main/forms/form-elements/radio/radio.module';
import { SelectModule } from 'app/main/forms/form-elements/select/select.module';
import { SwitchModule } from 'app/main/forms/form-elements/switch/switch.module';
import { TextareaModule } from 'app/main/forms/form-elements/textarea/textarea.module';
import { FileUploaderModule } from 'app/main/forms/form-elements/file-uploader/file-uploader.module';
import { QuillEditorModule } from 'app/main/forms/form-elements/quill-editor/quill-editor.module';
import { FlatpickrModule } from 'app/main/forms/form-elements/flatpickr/flatpickr.module';

@NgModule({
  declarations: [],
  imports: [
    CheckboxModule,
    DateTimePickerModule,
    InputModule,
    InputGroupsModule,
    NumberInputModule,
    RadioModule,
    SelectModule,
    SwitchModule,
    TextareaModule,
    InputMaskModule,
    FileUploaderModule,
    QuillEditorModule,
    FlatpickrModule
  ]
})
export class FormElementsModule {}
