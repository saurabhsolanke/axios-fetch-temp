import React from 'react'

const Table = ({ data, column }) => {
    return (
        <div className="container mt-5 px-5">
            <table className="min-w-full">
                <thead className="bg-white border-b">
                    <tr className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                        {column.map((item, index) => < TableHeadItem item={item} />)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => < TableRow item={item} column={column} />)}
                </tbody>
            </table>
        </div>
    )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column }) => (
    <tr className="border text-center">
        {column.map((columnItem, index) => {
            return <td className="border"> {item[`${columnItem.value}`]} </td>
        })}
    </tr>
)

export default Table