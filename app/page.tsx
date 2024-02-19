import { Order, columns } from '@/app/orders/columns';
import { DataTable } from '@/app/orders/data-table';

import mockData from '@/lib/MOCK_DATA.json';

async function getData(): Promise<Order[]> {
    // Fetch data from your API here.
    const data = mockData;

    return data;
}

export default async function OrderPage() {
    const data = await getData();

    return (
        <div className='container mx-auto py-10'>
            <DataTable columns={columns} data={data} />
        </div>
    );
}
