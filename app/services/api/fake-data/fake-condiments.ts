import {CondimentGroup} from '../product.models';

export class FakeCondiments {

    static  get(productId: string): CondimentGroup[] {

        let rtn: CondimentGroup[] = [];

        if (productId === '67e8ca3c-849e-4a21-862b-e26ae6953dc0') {
            rtn = [
                {
                    label: "REMOVE",
                    condiments: [
                        {
                            productId: '78075cea-07a6-472e-ac21-3a2717dd115a',
                            label: 'NO Lettuce',
                            price: 0
                        },
                        {
                            productId: '462587a1-2824-44ce-be1d-473db7976ac0',
                            label: 'NO Onion',
                            price: 0
                        },
                        {
                            productId: '0058ef35-dfd1-421a-97a3-86c8fed89334',
                            label: 'NO Tomato',
                            price: 0
                        }
                    ]
                },
                {
                    label: "EXTRAS",
                    condiments: [
                        {
                            productId: 'cdfeba5c-a6e5-4c02-a6e7-7da2b415ad00',
                            label: 'Egg',
                            price: 1
                        }
                    ]
                }
            ];

        } else if (productId === 'c3ceb76e-725c-4bf2-b740-8cfb9999e675') {


        }

        return rtn;
    }

}
