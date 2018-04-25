export const menus = [
    { key: '/', title: '首页', icon: 'mobile', },
    {
        key: '/list', title: '列表页', icon: 'scan',
        sub: []
    },
    {
        key: '/form', title: '表单页', icon: 'rocket',
        sub: [
            { key: '/form/1', title: '基础表单', icon: '', },
            { key: '/formstep', title: '动态表单', icon: '', },
        ],
    },
];