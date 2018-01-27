import {module} from 'angular';
import {ContactsComponent} from './contacts.component';
import {contactsListModule} from './list/list.module';
import {addContactModule} from './add/add.module';
import {editContactModule} from './edit/edit.module';
import {ContactsService} from './contacts.service';
import {routing} from './contacts.routing';

export const contactsModule = module('app.contacts', [
  contactsListModule.name,
  addContactModule.name,
  editContactModule.name,
])
  .component('contacts', new ContactsComponent())
  .config(routing)
  .service('contactsService', ContactsService);
