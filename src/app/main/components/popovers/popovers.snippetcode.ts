import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodePopoverPositions: snippetCode = {
  html: `
  <button type="button" rippleEffect class="btn btn-outline-primary" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."  placement="top"
    popoverTitle="Popover on top" >
    Popover on top
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." placement="right" 
    popoverTitle="Popover on right" container="body">
    Popover on right
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."  placement="bottom" 
    popoverTitle="Popover on bottom" container="body">
    Popover on bottom
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."  placement="left" 
    popoverTitle="Popover on left" container="body">
    Popover on left
  </button>
  `
};
export const snippetCodePopoverTriggers: snippetCode = {
  html: `
  <button type="button" rippleEffect class="btn btn-outline-primary"
    popoverTitle="Click Triggered" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." triggers="click:blur" >
    On Click Trigger
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary"
    popoverTitle="Hover Triggered" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." triggers="mouseenter:mouseleave" >
    On Hover Trigger
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary manual"
    popoverTitle="Manual Triggered" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." [autoClose]="true" triggers="manual" #manualOpen="ngbPopover" (click)="manualOpen.open()" >
    On Manual Trigger
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" popoverTitle="Manual Triggered" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie" triggers="mouseenter:mouseleave" #manualClose="ngbPopover" (click)="manualClose.close()" >
    Click me to close a popover
  </button>
  `
};
export const snippetCodePopoverOptions: snippetCode = {
  html: `
  <button type="button" rippleEffect class="btn btn-outline-primary" popoverClass="text-uppercase" popoverTitle="Text in Uppercase" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.">
    Click to toggle
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary delay"
  popoverTitle="You see, I show up after 300ms and disappear after 500ms!" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." [openDelay]="300" [closeDelay]="500" triggers="mouseenter:mouseleave" >
  Hover 300ms here
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary"
  popoverTitle="Disabled animation!" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie.">
  CLick to toggle
  </button>
  `
};
export const snippetCodePopoverMethods: snippetCode = {
  html: `
  <button type="button" rippleEffect class="btn btn-outline-primary"
    popoverTitle="Open Method Popover" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." [autoClose]="false" triggers="manual" #methodOpen="ngbPopover" (click)="methodOpen.open()" >
    Open Method <span [data-feather]="'play-circle'"></span>
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."
    triggers="mouseenter:mouseleave" #methodClose="ngbPopover" (click)="methodClose.close()"
    popoverTitle="Close Method Popover" >
    Close Method <span [data-feather]="'play-circle'"></span>
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." triggers="manual"#methodToggle="ngbPopover" (click)="methodToggle.toggle()"
    popoverTitle="Toggle Method Popover" >
    Toggle Method <span [data-feather]="'play-circle'"></span>
  </button>

  <div class="btn-group">
  <button
    type="button"
    rippleEffect
    class="btn btn-outline-primary"
    ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."
    #methodIsOpen="ngbPopover"
    (click)="methodIsOpen.isOpen()"
    popoverTitle="Dispose Method Popover"
    
  >
    Popover is : {{ methodIsOpen.isOpen() }}
    <span [data-feather]="'play-circle'"></span>
  </button>
</div>
  `
};
export const snippetCodePopoverEvents: snippetCode = {
  html: `
  <button type="button" rippleEffect class="btn btn-outline-primary" popoverTitle="Popover Open Event" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." triggers="manual" #OpenEvent="ngbPopover" (click)="openEvent()" >
    Open Event Popover
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" popoverTitle="Popover Open Event" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." triggers="manual" #OpenEventAfter="ngbPopover" (click)="openEventAfter()" >
    Open Event Popover
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary" popoverTitle="Popover Show Event" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." #CloseEvent="ngbPopover" triggers="mouseenter:mouseleave" (click)="closeEvent()" >
    Close Event Popover
  </button>

  <button type="button" rippleEffect class="btn btn-outline-primary"  popoverTitle="Popover Show Event" ngbPopover="Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie." #CloseEventAfter="ngbPopover" triggers="mouseenter:mouseleave" (click)="closeEventAfter()" >
    Closed Event Popover
  </button>
  `,
  ts: `

  @ViewChild('OpenEvent') OpenEvent;
  @ViewChild('OpenEventAfter') OpenEventAfter;
  @ViewChild('CloseEvent') CloseEvent;
  @ViewChild('CloseEventAfter') CloseEventAfter;

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  openEvent() {
    alert('Open event!');
    this.OpenEvent.open();
  }

  openEventAfter() {
    setTimeout(() => {
      alert('Opened After event!');
    }, 300);
    this.OpenEventAfter.open();
  }

  closeEvent() {
    alert('Close event!');
    this.CloseEvent.close();
  }

  closeEventAfter() {
    setTimeout(() => {
      alert('Closed After event!');
    }, 300);
    this.CloseEventAfter.close();
  }

  `
};
