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
                    icon: 'fa-university',
                    permission: ['CanSeeExpenses'],
                    order: 100
                }
            },
            {
                path: 'app-savings',
                data: {
                    title: 'Savings',
                    icon: 'fa-money',
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
                    icon: 'fa-user-circle-o',
                    permission: ['CanSeeUsers'],
                    order: 300
                }
            }
        ]
    }
];
