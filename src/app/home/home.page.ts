import { Component } from '@angular/core';

export interface FieldNames {
  name: string,
  title: string,
  sharp?: boolean
}

export interface Products {
  equip: string,
  mfg: string,
  model: string,
  serial: string,
  compartment: string,
  work_order: number,
  date: string,
  id: number,
  include: boolean
}

export interface sortFilter {
  sortingOrder: 'asc' | 'desc',
  sortedName: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fieldNames: FieldNames[] = [
    { 'name': 'equip', 'title': 'Equip', 'sharp': true },
    { 'name': 'mfg', 'title': 'MFG' },
    { 'name': 'model', 'title': 'Model', 'sharp': true },
    { 'name': 'serial', 'title': 'Serial', 'sharp': true },
    { 'name': 'compartment', 'title': 'Compartment' },
    { 'name': 'work_order', 'title': 'Work Order' },
    { 'name': 'date', 'title': 'Date' },
    { 'name': 'id', 'title': 'ID' },
    { 'name': 'include', 'title': 'Include' }
  ]
  data: Products[] = [
    { 'equip': "YARD CRUSHER", 'mfg': 'Johnson', 'model': 'NEW TRANS OIL FOR D-2', 'serial': "QWER32R2DAS3F3", 'compartment': 'Right Rear Planetary', 'work_order': 7452342531, 'date': "2017-12-10", 'id': 636346, 'include': false },
    { 'equip': "CHAIR", 'mfg': 'Yaskawa', 'model': 'WSF 32', 'serial': "ERNRNRNRTR23E3", 'compartment': 'Left Rear Planetary', 'work_order': 3234232348, 'date': "2016-10-10", 'id': 234234, 'include': true },
    { 'equip': "BATHROOM", 'mfg': 'KUKA', 'model': 'ZSX 1', 'serial': "PBDDVD56XCVXC32", 'compartment': 'Bottom Rear Planetary', 'work_order': 4566456345, 'date': "2016-12-10", 'id': 523443, 'include': false },
    { 'equip': "TABLE", 'mfg': 'ABB', 'model': 'DEW 12', 'serial': "ZSLGYTHS2M6MR4", 'compartment': 'Upper Rear Planetary', 'work_order': 2312312877, 'date': "2015-12-10", 'id': 876567, 'include': true }
  ]
  sortFilter = {
    'sortingOrder': '',
    'sortedName': ''
  }
  allChecked = false;
  constructor() { }

  sort(name: string, order: string) {
    this.sortFilter.sortingOrder = order
    this.sortFilter.sortedName = name
  }

  updateSelect($event) {
    this.allChecked = this.isAllCheked()
  }

  isAllCheked(): boolean {
    let count: number = 0;
    for (let index = 0; index < this.data.length; index++) {
      if (!!this.data[index].include) {
        count++
      }
    }
    return count === this.data.length
  }

  toggleCheckboxes($event) {
    let check
    setTimeout(() => {
      check = this.isAllCheked()
      this.allChecked = !check;
      for (let index = 0; index < this.data.length; index++) {
        this.data[index].include = !check
      }
    }, 0)
  }
}
