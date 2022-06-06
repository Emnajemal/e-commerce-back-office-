import { knowledgeBaseService } from './../../../pages/kb/knowledge-base/knowledge-base.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddproductComponent } from './addproduct.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('Component: AddProduct', () => {

    beforeEach(() => { // 3
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                HttpClientTestingModule,
                ReactiveFormsModule,
                FormsModule,
                
            ],
            providers:[knowledgeBaseService],
            declarations: [
                AddproductComponent
            ],
        }).compileComponents();

    });

    it('Check title value (AddProduct)', () => {
        const fixture = TestBed.createComponent(AddproductComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('AddProduct');
    });

});