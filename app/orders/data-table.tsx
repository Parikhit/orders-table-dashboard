'use client';

import { useState } from 'react';

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    SortingState,
    getSortedRowModel,
    getPaginationRowModel,
    VisibilityState,
    ColumnFiltersState,
    getFilteredRowModel,
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import { DataTablePagination } from '@/components/custom/Pagination';

import { Input } from '@/components/ui/input';

import { ChevronDownIcon } from '@radix-ui/react-icons';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnVisibility,
            columnFilters,
        },
    });

    return (
        <div className='rounded-md border p-2 bg-white'>
            <div className='flex flex-col p-6'>
                <div className='w-full flex justify-between px-4 pt-2 mb-10'>
                    <div className='mt-[-20px] font-bold text-3xl'>Orders</div>

                    <div className='mt-[-20px]'>
                        <Button className='bg-blue-700 px-10'>CREATE NEW</Button>
                    </div>
                </div>
                <div className='w-full flex items-center justify-around px-4 py-2 border rounded-lg bg-white shadow-md'>
                    <div className='flex flex-col py-4'>
                        <label className='mb-2 text-left font-semibold text-md'>
                            What are you looking for?
                        </label>
                        <Input
                            placeholder='Search for category,name,etc.'
                            value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
                            onChange={(event) =>
                                table.getColumn('email')?.setFilterValue(event.target.value)
                            }
                            className='max-w px-24'
                        />
                    </div>
                    <div className='flex flex-col py-4'>
                        <p className='mb-2 text-left font-semibold text-md'>Category</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant='ghost'
                                    className='ml-auto border flex items-center gap-20'
                                >
                                    <div className='px-4'>All</div>
                                    <div>
                                        <ChevronDownIcon />
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className='capitalize'
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        );
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className='flex flex-col  py-4'>
                        <p className='mb-2 text-left font-semibold text-md'>Status</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant='ghost'
                                    className='ml-auto border flex items-center gap-20'
                                >
                                    <div className='px-4'>All</div>
                                    <div>
                                        <ChevronDownIcon />
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                                {table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                        return (
                                            <DropdownMenuCheckboxItem
                                                key={column.id}
                                                className='capitalize'
                                                checked={column.getIsVisible()}
                                                onCheckedChange={(value) =>
                                                    column.toggleVisibility(!!value)
                                                }
                                            >
                                                {column.id}
                                            </DropdownMenuCheckboxItem>
                                        );
                                    })}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className='mb-[-30px]'>
                        <Button className='bg-blue-700 px-10'>SEARCH</Button>
                    </div>
                </div>

                <div className='border rounded-lg bg-white shadow-md p-3 my-6'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <div className='ml-3 mr-26 font-semibold text-xl'>Product Summary</div>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-between items-center'>
                                <p className=' mx-3'>Show</p>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant='ghost'
                                            className='ml-auto border font-semibold text-sm'
                                        >
                                            ALL COLUMN
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align='end'>
                                        {table
                                            .getAllColumns()
                                            .filter((column) => column.getCanHide())
                                            .map((column) => {
                                                return (
                                                    <DropdownMenuCheckboxItem
                                                        key={column.id}
                                                        className='capitalize'
                                                        checked={column.getIsVisible()}
                                                        onCheckedChange={(value) =>
                                                            column.toggleVisibility(!!value)
                                                        }
                                                    >
                                                        {column.id}
                                                    </DropdownMenuCheckboxItem>
                                                );
                                            })}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className='mx-4'>
                                <Button className='bg-blue-700'>DISPATCH SELECTED</Button>
                            </div>
                            <div>
                                <DataTablePagination table={table} />
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-around px-4 py-2'>
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column.columnDef.header,
                                                              header.getContext()
                                                          )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={row.getIsSelected() && 'selected'}
                                        >
                                            {row.getVisibleCells().map((cell) => (
                                                <TableCell key={cell.id}>
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className='h-24 text-center'
                                        >
                                            No results.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}
