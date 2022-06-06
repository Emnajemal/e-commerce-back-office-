import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddproductComponent } from "app/main/apps/ecommerce/addproduct/addproduct.component";


describe('Component: Addproduct', function (){

    let component: AddproductComponent;
    let fixture: ComponentFixture<AddproductComponent>;
    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [AddproductComponent],
            imports: [ReactiveFormsModule, FormsModule],
        });

        // create component and test fixture
        fixture = TestBed.createComponent(AddproductComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
      //  component.ngOnInit();
    });

    it('form invalid when empty', function () {
        expect(component.addForm.valid).toBeFalsy();
    });

    it('sellingprice field validity', function (){
        let sellingprice = component.addForm.controls['sellingprice'];
        expect(sellingprice.valid).toBeFalsy();
        sellingprice.setValue(0.00000009)
        expect(sellingprice.valid).toBeFalsy();
    });
});