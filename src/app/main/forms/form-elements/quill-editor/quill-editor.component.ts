import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as snippet from 'app/main/forms/form-elements/quill-editor/quill-editor.snippetcode';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuillEditorComponent implements OnInit {
  // public
  public contentHeader: object;

  // snippet code variables
  public _snippetCodeSnowEditor = snippet.snippetCodeSnowEditor;
  public _snippetCodeBubbleEditor = snippet.snippetCodeBubbleEditor;
  public _snippetCodeFullEditor = snippet.snippetCodeFullEditor;
  public _quillEditorContent = snippet.quillEditorContent;

  snowEditorRef = `
  <h1 class="ql-align-center">Quill Rich Text Editor</h1>
  <p class="card-text"><br /></p>
  <p class="card-text">
    Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built
    for the modern web. With its
    <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive
    <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.
  </p>
  <p class="card-text"><br /></p>
  <iframe
    class="ql-video ql-align-center"
    src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"
    width="560"
    height="238"
  ></iframe>
  <p class="card-text"><br /></p>
  <p class="card-text"><br /></p>
  <h2 class="ql-align-center">Getting Started is Easy</h2>
  <p class="card-text"><br /></p>
  <pre>
// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;
// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
var quill = new Quill('#editor', {
modules: {
toolbar: '#toolbar'
},
theme: 'snow'
});
// Open your browser's developer console to try out the API!</pre
  >
  <p class="card-text"><br /></p>
  <p class="card-text"><br /></p>
  <p class="card-text ql-align-center"><strong>Built with</strong></p>
  <p class="card-text ql-align-center">
    &nbsp;<span class="ql-formula" data-value="x^2 + (y - \sqrt[3]{x^2})^2 = 1"></span>&nbsp;
  </p>
  <p class="card-text"><br /></p>
  `;

  bubbleEditorRef = `
  <h1 class="ql-align-center">Quill Rich Text Editor</h1>
  <p class="card-text"><br /></p>
  <p class="card-text">
    Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built
    for the modern web. With its
    <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive
    <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.
  </p>
  <p class="card-text"><br /></p>
  <iframe
    class="ql-video ql-align-center"
    src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"
    width="560"
    height="238"
  ></iframe>
  <p class="card-text"><br /></p>
  <p class="card-text"><br /></p>
  <h2 class="ql-align-center">Getting Started is Easy</h2>
  <p class="card-text"><br /></p>
  <pre>
// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;
// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
var quill = new Quill('#editor', {
modules: {
toolbar: '#toolbar'
},
theme: 'snow'
});
// Open your browser's developer console to try out the API!</pre
  >
  <p class="card-text"><br /></p>
  <p class="card-text"><br /></p>
  <p class="card-text ql-align-center"><strong>Built with</strong></p>
  <p class="card-text ql-align-center">
    &nbsp;<span class="ql-formula" data-value="x^2 + (y - \sqrt[3]{x^2})^2 = 1"></span>&nbsp;
  </p>
  <p class="card-text"><br /></p>
  `;
  fullEditorRef = `
  <h1 class="ql-align-center">Quill Rich Text Editor</h1>
  <p class="card-text"><br /></p>
  <p class="card-text">
    Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built
    for the modern web. With its
    <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive
    <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.
  </p>
  <p class="card-text"><br /></p>
  <iframe
    class="ql-video ql-align-center"
    src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"
    width="560"
    height="238"
  ></iframe>
  <p class="card-text"><br /></p>
  <p class="card-text"><br /></p>
  <h2 class="ql-align-center">Getting Started is Easy</h2>
  <p class="card-text"><br /></p>
  <pre>
// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;
// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
var quill = new Quill('#editor', {
modules: {
toolbar: '#toolbar'
},
theme: 'snow'
});
// Open your browser's developer console to try out the API!</pre
  >
  <p class="card-text"><br /></p>
  <p class="card-text"><br /></p>
  <p class="card-text ql-align-center"><strong>Built with</strong></p>
  <p class="card-text ql-align-center">
    &nbsp;<span class="ql-formula" data-value="x^2 + (y - \sqrt[3]{x^2})^2 = 1"></span>&nbsp;
  </p>
  <p class="card-text"><br /></p>
  `;

  constructor() {}

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    // content header
    this.contentHeader = {
      headerTitle: 'Quill Editor',
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
            name: 'Quill Editor',
            isLink: false
          }
        ]
      }
    };
  }
}
