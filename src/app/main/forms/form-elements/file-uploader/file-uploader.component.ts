import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';

const URL = 'https://your-url.com';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileUploaderComponent implements OnInit {
  // public
  public contentHeader: object;
  public hasAnotherDropZoneOver: boolean = false;
  public hasBaseDropZoneOver: boolean = false;
  public uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });

  // Public Methods
  // -----------------------------------------------------------------------------------------------------
  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // content header
    this.contentHeader = {
      headerTitle: 'File Uploader',
      actionButton: true,
      breadcrumb: {
        type: '',
        links: [
          {
            name: 'Home',
            isLink: true,
            link: '/'
          },
          {
            name: 'Extensions',
            isLink: true,
            link: '/'
          },
          {
            name: 'File Uploader',
            isLink: false
          }
        ]
      }
    };
  }
}
