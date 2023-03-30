import { company, year } from "./configuration.js";

import {role as roleA} from './nwabisa.js'
import { role as roleB } from './johannes.js'
import {role as roleC} from './alex.js'


const message ='© ' + company + ' (' + year + ')'
document.querySelector('#footer').innerText = message


console.log('Roles:',roleA, roleB, roleC)