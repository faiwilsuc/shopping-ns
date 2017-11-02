import {DeliveryDate} from '../delivery-date.service';

const dateFormat = require('dateformat');

export class FakeDeliveryDates {

    static  get(): DeliveryDate[] {

        const rtn: DeliveryDate[] = [];

        const today = new Date().getTime();
        for (var i = 0; i < 7; i++) {
            const date = new Date(today+i*24*3600*1000);
            rtn.push({
                date,
                label: dateFormat(date, "ddd dS mmm")
            });
        }

        return rtn;

    }

}
