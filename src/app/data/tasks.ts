import {  VTask } from '../models/vtasks';


export const tasks: VTask[] = [
  {
    id: 1,
    category: 'Urgent',
    title: 'Urgent',
    date: new Date(Date.now()).toISOString().slice(0, 11).replace('T', ' '),
    description:
      'I feel myself bad and reely need to ask for helping me with my lovly dog. It needs to go for a walk from 9am for 15 min, and evening time from 7pm for 20 min. Please if someone can help me with it I-ll reely appriciate it.',
    period: 9,
    isUrgent: true,
    class: 'urgently'
  },
  {
    id: 2,
    category: 'Shopping',
    title: 'Do shopping in nearest shop',
    date: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
    description:
      'I broke my legs and can not go to shop buying some products for me. Could you please to help with it. I need some bred(dark), milk 1l, tomato 3, spagetti(barilla), cheese (emental), coffee.',
    period: 9,
    isUrgent: false,
    class: 'shopping'
  },
  {
    id: 3,
    category: 'Walking with pets',
    title: 'Take for a walk my little pug',
    date: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
    description:
      'I feel myself bad and reely need to ask for helping me with my lovly dog. It needs to go for a walk from 9am for 15 min, and evening time from 7pm for 20 min. Please if someone can help me with it I-ll reely appriciate it.',
    period: 9,
    isUrgent: false,
    class: 'pets'
  },
  {
    id: 4,
    category: 'Help with PC',
    title: 'My PC needed to update',
    date: new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' '),
    description:
      'Could you please to help me with updateing my PC.',
    period: 9,
    isUrgent: false,
    class: 'others'
  },
];