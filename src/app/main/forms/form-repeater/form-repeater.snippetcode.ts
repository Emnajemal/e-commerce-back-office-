import { snippetCode } from '@core/components/card-snippet/card-snippet.component';

export const snippetCodeInvoiceRepeater: snippetCode = {
  html: `
  <form action="#" class="invoice-repeater">
  <div *ngFor="let item of items; let i = index" @heightIn>
    <div class="row d-flex align-items-end">
      <div class="col-md-4 col-12">
        <div class="form-group">
          <label for="itemName{{ i }}">Item Name</label>
          <input
            type="text"
            class="form-control"
            [(ngModel)]="item.itemName"
            name="itemName{{ i }}"
            id="itemName{{ i }}"
            placeholder="Vuexy Admin Template"
          />
        </div>
      </div>

      <div class="col-md-2 col-12">
        <div class="form-group">
          <label for="itemCost">Cost</label>
          <input
            type="number"
            class="form-control"
            id="itemcost"
            [(ngModel)]="item.itemCost"
            name="itemCost{{ i }}"
            id="itemCost{{ i }}"
            placeholder="32"
          />
        </div>
      </div>

      <div class="col-md-2 col-12">
        <div class="form-group">
          <label for="itemQuantity{{ i }}">Quantity</label>
          <input
            type="number"
            class="form-control"
            id="itemQuantity{{ i }}"
            name="itemQuantity{{ i }}"
            [(ngModel)]="item.itemQuantity"
            placeholder="1"
          />
        </div>
      </div>

      <div class="col-md-2 col-12">
        <div class="form-group">
          <label for="staticPrice">Price</label>
          <input type="text" readonly class="form-control-plaintext" id="staticPrice" value="$32" />
        </div>
      </div>

      <div class="col-md-2 col-12 mb-50">
        <div class="form-group">
          <button class="btn btn-outline-danger text-nowrap px-1" (click)="deleteItem(i)" rippleEffect>
            <i data-feather="x" class="mr-25"></i>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
    <hr />
  </div>
</form>
<div class="row">
  <div class="col-12">
    <button class="btn btn-icon btn-primary" type="button" (click)="addItem()" rippleEffect>
      <i data-feather="plus" class="mr-25"></i>
      <span>Add New</span>
    </button>
  </div>
</div>
<pre class="p-1 text-white mt-1">
  <div  *ngFor="let item of items; let i = index">
Index: {{ i }}
Item Name: {{ item.itemName }}
Cost: {{ item.itemCost }}
Quantity: {{ item.itemQuantity }}</div>
</pre>
`,
  ts: `
  // public
  public items = [{ itemId: '', itemName: '', itemQuantity: '', itemCost: '' }];

  public item = {
    itemName: '',
    itemQuantity: '',
    itemCost: ''
  };

  // Public Methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Add Item
   */
  addItem() {
    this.items.push({
      itemId: '',
      itemName: '',
      itemQuantity: '',
      itemCost: ''
    });
  }

  /**
   * DeleteItem
   *
   * @param id
   */
  deleteItem(id) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items.indexOf(this.items[i]) === id) {
        this.items.splice(i, 1);
        break;
      }
    }
  }
`
};
