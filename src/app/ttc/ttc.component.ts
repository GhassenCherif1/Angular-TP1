import {Component,computed,Signal,signal,WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ttc.component.html',
  styleUrl: './ttc.component.css',
})
export class TTCComponent {
  tva: WritableSignal<number> = signal(18);
  quantity: WritableSignal<number> = signal(1);
  unitPrice: WritableSignal<number> = signal(0);

  unitPriceTTC: Signal<number> = computed(() => {
    return (this.unitPrice() * this.tva()) / 100 + this.unitPrice();
  });
  totalPriceTTC: Signal<number> = computed(() => {
    return this.unitPriceTTC() * this.quantity();
  });
  discount: Signal<number> = computed(() => {
    const quant = this.quantity();
    if (quant >= 10 && quant <= 15) return (this.totalPriceTTC() * 20) / 100;
    if (quant > 15) return (this.totalPriceTTC() * 30) / 100;
    return 0;
  });
}