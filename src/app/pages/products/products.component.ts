import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  form!: FormGroup;

  private formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      preco: ['', Validators.required],
      tamanho: ['', Validators.required],
      quantidade: ['', Validators.required],
    });
  }

  submit() {
    if (!this.form.valid) {
      return;
    }

    console.log(this.form.value);
  }
}
