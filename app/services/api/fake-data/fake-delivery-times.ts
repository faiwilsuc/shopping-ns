import {DeliveryTime} from '../delivery-time.service';

export class FakeDeliveryTimes {

    static  get(): DeliveryTime[] {

        return [
            {label: '17:45'},
            {label: '18:00'},
            {label: '18:15'},
            {label: '18:30'},
            {label: '18:35'},
            {label: '18:40'}
        ];


    }

}
