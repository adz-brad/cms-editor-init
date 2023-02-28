const data = [
     {
       id: '101',
       parent: null,
       children: ['201'],
       content: null,
       type: 'div', 
       props: { className: 'adz-div'}
     },
     {
       id: '201',
       parent: '101',
       children: ['301','302'],
       content: null,
       type: 'ul',
       props: { className: 'adz-ul'}
     },
     {
       id: '301',
       parent: '201',
       children: [],
       content: 'List Item 1',
       type: 'li', 
       props: { className: 'adz-li'}
     },
     {
       id: '302',
       parent: '201',
       children: [],
       content: 'List Item 2',
       type: 'li', 
       props: { className: 'adz-li'}
     },
     {
       id: '303',
       parent: '201',
       children: [],
       content: 'List Item 3',
       type: 'li', 
       props: { className: 'adz-li'}
     },
     {
      id: '111',
      parent: null,
      children: ['211'],
      content: null,
      type: 'div', 
      props: { className: 'adz-div'}
    },
    {
      id: '211',
      parent: '111',
      children: ['311','312'],
      content: null,
      type: 'ul',
      props: { className: 'adz-ul'}
    },
    {
      id: '311',
      parent: '211',
      children: [],
      content: 'List Item 1',
      type: 'li', 
      props: { className: 'adz-li'}
    },
    {
      id: '312',
      parent: '211',
      children: [],
      content: 'List Item 2',
      type: 'li', 
      props: { className: 'adz-li'}
    },
    {
      id: '313',
      parent: '211',
      children: [],
      content: 'List Item 3',
      type: 'li', 
      props: { className: 'adz-li'}
    },
  ]

  module.exports = { data } 