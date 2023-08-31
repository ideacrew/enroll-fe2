import { Injectable } from '@angular/core';
import { createMask } from '@ngneat/input-mask';

@Injectable({
  providedIn: 'root',
})

/**
 * A utility service for common functionality.
 */
export class UtilService {
  /**
   * Focuses on the specified element after a specified delay.
   * @param el - The element to focus on.
   * @param delay - The delay (in milliseconds) before focusing on the element. Default is 200ms.
   */
  focusElement(el: string, delay = 200) {
    setTimeout(() => {
      const thisEl: HTMLElement | null = document.querySelector(el);
      if (thisEl) {
        thisEl.focus();
      }
    }, delay);
  }

  currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: ',',
    digits: 0,
    digitsOptional: false,
  });

  formatCommaNumber(value: string) {
    return parseInt(value?.toString().replace(/,/g, '') || '0');
  }
}
