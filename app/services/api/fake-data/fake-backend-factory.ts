import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { FakeProducts } from './fake-products';
import { FakeCondiments } from './fake-condiments';
import { FakeSuburbs } from './fake-suburbs';
import { FakeDeliveryDates } from './fake-delivery-dates';
import { FakeDeliveryTimes } from './fake-delivery-times';

export function FakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {

        setTimeout(() => {

            if (connection.request.url.endsWith('/api/suburbs') && connection.request.method === RequestMethod.Get) {
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: FakeSuburbs.getAll() })));

                return;
            }

            if (connection.request.url.endsWith('/api/products') && connection.request.method === RequestMethod.Get) {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: FakeProducts.getAll() })));

                return;
            }
            if (connection.request.url.endsWith('/api/condiments') && connection.request.method === RequestMethod.Get) {
                const urlParts = connection.request.url.split('/');
                const id = urlParts[urlParts.length - 1];
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: FakeCondiments.get(id) })));

                return;
            }
            if (connection.request.url.endsWith('/api/delivery-times') && connection.request.method === RequestMethod.Get) {
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: FakeDeliveryTimes.get() })));

                return;
            }
            if (connection.request.url.endsWith('/api/delivery-dates') && connection.request.method === RequestMethod.Get) {
                connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: FakeDeliveryDates.get() })));

                return;
            }

        }, 2000);

    });

    return new Http(backend, options);
};

export let FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    useFactory: FakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
