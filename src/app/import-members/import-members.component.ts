import { Component, OnInit } from '@angular/core';
import { createReadStream } from 'fs';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-import-members',
  templateUrl: './import-members.component.html',
  styleUrls: ['./import-members.component.scss']
})
export class ImportMembersComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  public  ReadtoJson(event: any): void {
   const target: DataTransfer = (event.target);
   if (target.files.length !== 1 ){
      throw  new Error('Flere filer ikke tiladt');
   }

   const reader: FileReader = new FileReader();
   reader.readAsBinaryString(target.files[0]);
   reader.onload = (e: any) => {
    const binarystr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary'});

    const wsname: string = wb.SheetNames[0];
    const ws: XLSX.WorkSheet = wb.SheetNames[wsname];
    const data = XLSX.utils.sheet_to_json(ws);
    console.log(data);
   };
  }

  openFile(): void {
    document.querySelector('input').click();
  }
}
