import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  public convertToBase64(blob: Blob): string {
    const reader = new FileReader();
    try {
      reader.readAsDataURL(blob);
      reader.onload = () => {

      };
    } catch (e) {
      throw  e;
    }
    return reader.result.toString();
  }
}
