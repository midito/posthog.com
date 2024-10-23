const menu = [
    {
        name: 'Products',
        url: '/product-analytics',
        icon: 'IconFeatures',
        children: [
            {
                name: 'Product analytics',
                icon: 'IconGraph',
                color: 'blue',
                url: '/product-analytics',
                children: [
                    {
                        name: 'Features',
                        url: '/product-analytics',
                    },
                    {
                        name: 'Pricing',
                        url: '/product-analytics/pricing',
                    },
                    {
                        name: 'Compare',
                        url: '/product-analytics/compare',
                    },
                    {
                        name: 'Docs',
                        url: '/product-analytics/docs',
                    },
                    {
                        name: 'Tutorials',
                        url: '/product-analytics/tutorials',
                    },
                    {
                        name: 'Questions?',
                        url: '/product-analytics/questions',
                    },
                ],
            },
            {
                name: 'Web analytics',
                icon: 'IconPieChart',
                color: '[#36C46F]',
                url: '/web-analytics',
            },
            {
                name: 'Session replay',
                icon: 'IconRewindPlay',
                color: 'yellow',
                url: '/session-replay',
            },
            {
                name: 'Feature flags',
                icon: 'IconToggle',
                color: 'seagreen',
                url: '/feature-flags',
            },
            {
                name: 'Experiments',
                icon: 'IconFlask',
                color: 'purple',
                url: '/experiments',
            },
            {
                name: 'Surveys',
                icon: 'IconMessage',
                color: 'salmon',
                url: '/surveys',
            },
            {
                name: 'CDP',
                icon: 'IconPlug',
                color: 'sky-blue',
                url: '/cdp',
            },
            {
                name: 'Data warehouse',
                icon: 'IconDatabase',
                color: 'lilac',
                url: '/data-warehouse',
            },
            {
                name: 'Product OS',
                icon: 'IconStack',
                color: 'blue',
                url: '/product-os',
            },
        ],
    },
    pricingMenu,
    docsMenu,
    communityMenu,
    companyMenu,
]

export default menu
