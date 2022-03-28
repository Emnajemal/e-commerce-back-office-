import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeSnowEditor: snippetCode = {
  html: `
  <quill-editor  [(ngModel)]="quillEditorContent">
    <div quill-editor-toolbar>
      <span class="ql-formats">
        <button class="ql-bold" [title]="'Bold'"></button>
        <button class="ql-italic" [title]="'italic'"></button>
        <button class="ql-underline" [title]="'underline'"></button>
      </span>
      <span class="ql-formats">
        <select class="ql-align" [title]="'Alignment'">
          <option selected></option>
          <option value="center"></option>
          <option value="right"></option>
          <option value="justify"></option>
        </select>
      </span>
      <span class="ql-formats">
        <button class="ql-list" value="ordered" type="button"></button>
      </span>
      <span class="ql-formats">
        <button class="ql-link" value="ordered" type="button"></button>
        <button class="ql-image" value="ordered" type="button"></button>
        <button class="ql-video" value="ordered" type="button"></button>
      </span>
      <span class="ql-formats">
        <button class="ql-formula" value="ordered" type="button"></button>
        <button class="ql-code-block" value="ordered" type="button"></button>
      </span>
      <span class="ql-formats">
        <button class="ql-clean" value="ordered" type="button"></button>
      </span>
    </div>

  </quill-editor>
  `,
  ts: `
  public quillEditorContent = \`
  <h1 class="ql-align-center">Quill Rich Text Editor</h1>
  <p><br></p>
  <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> editor
    built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular
      architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is
    completely customizable to fit any need.</p>
  <p><br></p>
  <iframe class="ql-video ql-align-center"
    src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>
  <p><br></p>
  <p><br></p>
  <h2 class="ql-align-center">Getting Started is Easy</h2>
  <p><br></p>
  <pre>// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;
    // &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
    var quill = new Quill('#editor', &#123;
    modules: &#123;
    toolbar: '#toolbar'
    &#125;,
    theme: 'snow'
    &#125;);
    // Open your browser's developer console to try out the API!
  </pre>
  <p><br></p>
  <p><br></p>
  <p class="ql-align-center"><strong>Built with</strong></p>
  <p class="ql-align-center">&nbsp;<span class="ql-formula"
      data-value="x^2 + (y - \sqrt[3]&#123; x^2&#125;)^2 = 1"></span>&nbsp;</p>
  <p><br></p>
  \`;
  `
};

export const snippetCodeBubbleEditor: snippetCode = {
  html: `
  <quill-editor theme="bubble" [(ngModel)]="quillEditorContent">
    <div quill-editor-toolbar>
      <span class="ql-formats">
        <button class="ql-bold" [title]="'Bold'"></button>
        <button class="ql-italic" [title]="'italic'"></button>
        <button class="ql-underline" [title]="'underline'"></button>
      </span>
      <span class="ql-formats">
        <select class="ql-align" [title]="'Aligment'">
          <option selected></option>
          <option value="center"></option>
          <option value="right"></option>
          <option value="justify"></option>
        </select>
      </span>
    </div>
  </quill-editor>
  `,
  ts: `
  public quillEditorContent = \`
  <h1 class="ql-align-center">Quill Rich Text Editor</h1>
  <p><br></p>
  <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> editor
    built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular
      architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is
    completely customizable to fit any need.</p>
  <p><br></p>
  <iframe class="ql-video ql-align-center"
    src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>
  <p><br></p>
  <p><br></p>
  <h2 class="ql-align-center">Getting Started is Easy</h2>
  <p><br></p>
  <pre>// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;
    // &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
    var quill = new Quill('#editor', &#123;
    modules: &#123;
    toolbar: '#toolbar'
    &#125;,
    theme: 'snow'
    &#125;);
    // Open your browser's developer console to try out the API!
  </pre>
  <p><br></p>
  <p><br></p>
  <p class="ql-align-center"><strong>Built with</strong></p>
  <p class="ql-align-center">&nbsp;<span class="ql-formula"
      data-value="x^2 + (y - \sqrt[3]&#123; x^2&#125;)^2 = 1"></span>&nbsp;</p>
  <p><br></p>
  \`;
  `
};
export const snippetCodeFullEditor: snippetCode = {
  html: `
  <quill-editor [(ngModel)]="quillEditorContent"></quill-editor>
      `,
  ts: `
  public quillEditorContent = \`
  <h1 class="ql-align-center">Quill Rich Text Editor</h1>
  <p><br></p>
  <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> editor
    built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular
      architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is
    completely customizable to fit any need.</p>
  <p><br></p>
  <iframe class="ql-video ql-align-center"
    src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>
  <p><br></p>
  <p><br></p>
  <h2 class="ql-align-center">Getting Started is Easy</h2>
  <p><br></p>
  <pre>// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;
    // &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
    var quill = new Quill('#editor', &#123;
    modules: &#123;
    toolbar: '#toolbar'
    &#125;,
    theme: 'snow'
    &#125;);
    // Open your browser's developer console to try out the API!
  </pre>
  <p><br></p>
  <p><br></p>
  <p class="ql-align-center"><strong>Built with</strong></p>
  <p class="ql-align-center">&nbsp;<span class="ql-formula"
      data-value="x^2 + (y - \sqrt[3]&#123; x^2&#125;)^2 = 1"></span>&nbsp;</p>
  <p><br></p>
  \`;
  `
};
export const quillEditorContent: snippetCode = {
  html: `
<h1 class="ql-align-center">Quill Rich Text Editor</h1>
<p><br></p>
<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> editor
  built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular
    architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is
  completely customizable to fit any need.</p>
<p><br></p>
<iframe class="ql-video ql-align-center"
  src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>
<p><br></p>
<p><br></p>
<h2 class="ql-align-center">Getting Started is Easy</h2>
<p><br></p>
<pre>// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;
  // &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
  var quill = new Quill('#editor', &#123;
  modules: &#123;
  toolbar: '#toolbar'
  &#125;,
  theme: 'snow'
  &#125;);
  // Open your browser's developer console to try out the API!
</pre>
<p><br></p>
<p><br></p>
<p class="ql-align-center"><strong>Built with</strong></p>
<p class="ql-align-center">&nbsp;<span class="ql-formula"
    data-value="x^2 + (y - \sqrt[3]&#123; x^2&#125;)^2 = 1"></span>&nbsp;</p>
<p><br></p>
`
};
