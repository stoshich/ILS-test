import React from 'react';
import { Table } from 'antd';
import { useDispatch } from 'react-redux';
import { newRoute } from '../redux/slices/routeSlice';
import { fetchCoords } from '../redux/slices/polylineSlice';

const columns = [
    {
        title: 'Номер заявки',
        dataIndex: 'number',
    },
    {
        title: 'Координаты ОТ lat',
        dataIndex: 'lat1',
    },
    {
        title: 'Координаты ОТ lng',
        dataIndex: 'lng1',
    },
    {
        title: 'Координаты ДО lat',
        dataIndex: 'lat2',
    },
    {
        title: 'Координаты ДО lng',
        dataIndex: 'lng2',
    },
];
const data = [
    {
        key: '1',
        number: '№1',
        lat1: 59.84660399,
        lng1: 30.29496392,
        lat2: 59.82934196,
        lng2: 30.42423701,
    },
    {
        key: '2',
        number: '№2',
        lat1: 59.82934196,
        lng1: 30.42423701,
        lat2: 59.82761295,
        lng2: 30.41705607,
    },
    {
        key: '3',
        number: '№3',
        lat1: 59.83567701,
        lng1: 30.38064206,
        lat2: 59.84660399,
        lng2: 30.29496392,
    },
    {
        key: '4',
        number: '№4',
        lat1: 59.84660399,
        lng1: 30.29496392,
        lat2: 59.82761295,
        lng2: 30.41705607,
    },
    {
        key: '5',
        number: '№5',
        lat1: 59.83567701,
        lng1: 30.38064206,
        lat2: 59.84660399,
        lng2: 30.29496392,
    },
];

const CoordinateTable = () => {
    const dispatch = useDispatch()
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            dispatch(newRoute({ latlng1: [selectedRows[0].lat1, selectedRows[0].lng1], latlng2: [selectedRows[0].lat2, selectedRows[0].lng2] }))
            dispatch(fetchCoords([selectedRows[0].lng1, selectedRows[0].lat1, selectedRows[0].lng2, selectedRows[0].lat2]))
        },
    };
    return (
        <div className='table'>
            <Table
                rowSelection={{
                    type: 'radio',
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                pagination={{ position: ['none', 'none'] }}
            />
        </div>
    )
}

export default CoordinateTable