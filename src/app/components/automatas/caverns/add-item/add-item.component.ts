import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Behavior } from 'src/app/components/models/cell/behavior.model';
import { Cell } from 'src/app/components/models/cell/cell.model';
import { ItemsService } from 'src/app/services/items/items.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  public addItemForm!: FormGroup;
  public behaviors: Array<Behavior> = [
    { name: 'Fluid', value: 0 },
    { name: 'Wood', value: 1 },
    { name: 'Sand', value: 2 },
    { name: 'Fire', value: 3 },
    { name: 'Smoke', value: 4 },
  ];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this.addItemForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      color: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
      behavior: ['', [Validators.required]],
    });
  }

  public get errorControl() {
    return this.addItemForm.controls;
  }

  public addItem(): void {
    if (this.addItemForm.valid) {
      const item: Cell = {
        behavior: this.addItemForm.get('behavior')?.value,
        color: `#${this.addItemForm.get('color')?.value}`,
        volume: 1,
        name: this.addItemForm.get('name')?.value,
        flowed: false,
      };

      this.itemsService.addItem(item);
    }
  }
}
