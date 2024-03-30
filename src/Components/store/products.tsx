//@ts-nocheck
//добавление файла *.d.ts и указания в нем ~~ declare module "*.jpg" ~~ не помогло
import AppleBYZ from '../../assets/photos/Apple_BYZ_S852I.jpg'
import EarPod_1 from '../../assets/photos/Apple_EarPod_1.jpg'
import EarPod_2 from '../../assets/photos/Apple_EarPod_2.jpg'
import AirPods_Pro from '../../assets/photos/AirPods_Pro.jpg'
import GERLAX from '../../assets/photos/GERLAX GH-04.jpg'
import BOROFONE from '../../assets/photos/BOROFONE BO4.jpg'

export interface IHeadphones {
    title: string
    price: number
    image: string
    rating: number
}

export interface IDiscountProduct {
    title: string
    discount: number
}

export const discountProduct: IDiscountProduct[] = [
    {
        title: 'Apple BYZ S852I',
        discount: 20,
    },
]

export const headphones: IHeadphones[] = [
    {
        title: 'Apple BYZ S852I',
        price: 11739,
        image: AppleBYZ,
        rating: 4.0,
    },
    {
        title: 'Apple EarPods 1',
        price: 15379,
        image: EarPod_1,
        rating: 4.5,
    },
    {
        title: 'Apple EarPods 2',
        price: 19569,
        image: EarPod_2,
        rating: 4.8,
    },
    {
        title: 'Apple BYZ S852I',
        price: 11739,
        image: AppleBYZ,
        rating: 4.0,
    },
    {
        title: 'Apple EarPods 1',
        price: 15379,
        image: EarPod_1,
        rating: 4.5,
    },
    {
        title: 'Apple EarPods 2',
        price: 19569,
        image: EarPod_2,
        rating: 4.8,
    },
]

export const wirelessHeadphones: IHeadphones[] = [
    {
        title: 'Apple AirPods Pro',
        price: 22410,
        image: AirPods_Pro,
        rating: 4.9,
    },
    {
        title: 'GERLAX GH-04',
        price: 3532,
        image: GERLAX,
        rating: 3.5,
    },
    {
        title: 'BOROFONE BO4',
        price: 3700,
        image: BOROFONE,
        rating: 4.1,
    },
]
