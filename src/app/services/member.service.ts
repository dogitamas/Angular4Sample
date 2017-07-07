import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class MemberService {

  constructor() { }

  members = [
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' },
   { id: 1,  name: 'Susuan Sarandon', age: '22', pic: '/assets/images/susan-sarandon-1-600x800.jpg' },
   { id: 2, name: 'Donnie Brasco', age: '54', pic: '/assets/images/Donnie_Brasco.jpg' },
   { id: 3, name: 'Danny de Vito', age: '48', pic: '/assets/images/88.jpg' }                 
 ];


}
