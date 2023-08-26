import dressIcon from '../assets/icons/woman-clothes.png'
import accsessoires from '../assets/icons/bags.png'
import footwear from '../assets/icons/high-heel.png'
import islamicIcon from '../assets/icons/woman.png'


export const clothCategoryList = [
    {
        title: 'Kyimlar',
        icon: dressIcon,
        list: [
            {
                title: 'Barcha mahsulotlar',
                category: 'all_products'
            },
            {
                title: 'Fudbolka va toplar',
                category: 't_shirt'
            },
            {
                title:  "Ko'ylaklar",
                category: 'dress'
            },
            {
                title: 'Shimlar va jinsilar',
                category: 'jeans'
            },
            {
                title: 'Islomiy kyimlar',
                category: 'islamic'
            },
            {
                title: 'Rubashka',
                category: 'bluse'
            },
        
        ]
    },

    {
        title: 'Islomiy Kyimlar',
        icon: islamicIcon,
        list: [
            {
                title: 'Barcha mahsulotlar',
                category: 'islamic'
            },
            {
                title: 'Hijoblar',
                category: 'khijab'
            },
            {
                title:  "Ko'ylaklar",
                category: 'islamic_dress'
            },
            {
                title: 'Taqinchoqlar',
                category: 'islamic_jawellery'
            }
        ]
    },

    {
        title: 'Poyabzallar',
        icon: footwear,
        list: [
            {
                title: 'Barcha mahsulotlar',
                category: 'footwear'
            },
            {
                title: 'Bazimlar uchun',
                category: 'party_foot_wear'
            },
            {
                title:  "Sport poyabzallari",
                category: 'sport_foot_wear'
            },
            {
                title: 'Shippaklar',
                category: 'slipper'
            }
        ]
    },

    {
        title: 'Aksessuarlar',
        icon: accsessoires,
        list: [
            {
                title: 'Barcha mahsulotlar',
                category: 'accsessoires'
            },
            {
                title: 'Sumkalar',
                category: 'bags'
            },
            {
                title:  "Ko'zoynaklar",
                category: 'sun_glasses'
            },
            {
                title: "Belbog'lar",
                category: 'belt'
            }
        ]
    }
]