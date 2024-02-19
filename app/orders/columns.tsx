'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

// This type is used to define the shape of our data.

export type Order = {
    id: number;
    shpiify: number;
    date: string;
    status: string;
    customer: string;
    email: string;
    country: string;
    shipping: string;
    source: string;
    order_type: string;
};

export const columns: ColumnDef<Order>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label='Select all'
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label='Select row'
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: 'id',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    ID
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
    },
    {
        accessorKey: 'shpiify',
        header: 'SHPIIFY #',
    },
    {
        accessorKey: 'date',
        header: 'DATE',
    },
    {
        accessorKey: 'status',
        header: 'STATUS',
    },
    {
        accessorKey: 'customer',
        header: 'CUSTOMER',
    },
    {
        accessorKey: 'email',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Email
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
    },
    {
        accessorKey: 'country',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Country
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            );
        },
    },

    {
        accessorKey: 'shipping',
        header: 'SHIPPING',
    },

    {
        accessorKey: 'source',
        header: 'SOURCE',
    },
    {
        accessorKey: 'order_type',
        header: 'ORDER TYPE',
    },
];
