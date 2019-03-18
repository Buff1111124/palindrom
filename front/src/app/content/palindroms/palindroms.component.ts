import { Component, OnInit } from '@angular/core';
import {Paliandroms} from '../../models/paliandroms';
import {PalindromsService} from '../../services/palindroms.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-palindroms',
  templateUrl: './palindroms.component.html',
  styleUrls: ['./palindroms.component.scss']
})
export class PalindromsComponent implements OnInit {
    Paliandroms = new Paliandroms('');
    error='';
    Paliandrom: Paliandroms[];
    
  constructor(
  private PalindromsService: PalindromsService,
  ) { }
    
    onSub(c) {
        this.error = '';
        this.Paliandrom = null;
    this.PalindromsService.palindrom(this.Paliandroms).subscribe(
            (res: Paliandroms[]) => {
                this.Paliandrom = res;
            },
            (err) => {
                this.error = err;
            }
    )
    }
    
  ngOnInit() { }

}
