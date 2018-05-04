export const MENU = [
    {
        path: 'pages',
        children: [
            {
                path: 'app-households',
                data: {
                    title: 'Households',
                    icon: 'fa-home',
                    permission: ['CanSeeHouseholds'],
                    order: 0
                }
            },
            {
                path: 'app-expenses',
                data: {
                    title: 'Expenses',
                    icon: 'fa-home',
                    permission: ['CanSeeExpenses'],
                    order: 100
                }
            },
            {
                path: 'app-savings',
                data: {
                    title: 'Savings',
                    icon: 'fa-balance-scale',
                    permission: ['CanSeeSavings'],
                    order: 200
                }
            },
            {
                path: 'app-settings',
                data: {
                    title: 'Settings',
                    icon: 'fa-cog',
                    permission: ['CanSeeSettings'],
                    orer: 300
                }
            },
            {
                path: 'app-users',
                data: {
                    title: 'Users',
                    icon: 'fa-users',
                    permission: ['CanSeeUsers'],
                    order: 300
                }
            }
        ]
    }
];
