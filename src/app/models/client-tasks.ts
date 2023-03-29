export interface CTask{
    id?: string
    category: string
    title: string
    description: string
    period: number
    isUrgent: boolean
    date: string
    class: string
    clientId: string
    status: {
      active: boolean
      inProgress: boolean
      done: boolean
      }
    }


/* id: 4,
category: 'Help with PC',
title: 'My PC needed to update',
date: new Date(Date.now()).toISOString().slice(0, 11).replace('T', ' '),
description:
  'My PC always has the message about updating. Could you help me to update my PC?',
period: 9,
isUrgent: false,
class: 'others' */