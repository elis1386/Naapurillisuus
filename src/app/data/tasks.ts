import {  VTask } from '../models/vtasks';


export const tasks: VTask[] = [
  {
    id: 1,
    category: 'Urgent',
    title: 'Urgent',
    date: new Date(Date.now()).toISOString().slice(0, 11).replace('T', ' '),
    description:
      'I feel bad and really need to ask for help with my lovely dog. It needs to go for a walk from 9am for 15 min, and evening time from 7pm for 20 min. Please if someone can help me with it I would realy appreciate it.',
    period: 9,
    isUrgent: true,
    class: 'urgently'
  },
  {
    id: 2,
    category: 'Shopping',
    title: 'Do shopping in nearest shop',
    date: new Date(Date.now()).toISOString().slice(0, 11).replace('T', ' '),
    description:
      'I broke my legs and cannot go shopping to buy some food for me. Could you please help me with it? I need some bread(rye), 1l milk, tomato: 3, spagetti(barilla), cheese (emental), coffee.',
    period: 9,
    isUrgent: false,
    class: 'shopping'
  },
  {
    id: 3,
    category: 'Walking with pets',
    title: 'Take for a walk my little pug',
    date: new Date(Date.now()).toISOString().slice(0, 11).replace('T', ' '),
    description:
      'I got ill and desperately need to ask for help with my lovely dog. It needs to go for a walk twice a day: around 8 am for 10-20 min, and in the evening(around 20-21) for 20 min. Please, if someone can help me with it I would be really grateful for it.',
    period: 9,
    isUrgent: false,
    class: 'pets'
  },
  {
    id: 4,
    category: 'Help with PC',
    title: 'My PC needed to update',
    date: new Date(Date.now()).toISOString().slice(0, 11).replace('T', ' '),
    description:
      'My PC always has the message about updating. Could you help me to update my PC?',
    period: 9,
    isUrgent: false,
    class: 'others'
  },
];