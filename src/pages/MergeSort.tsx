import React, { FC, useState, useEffect } from 'react'
import { FamilyName } from './../enums'
import { PeopleCollection } from './../Data/PeopleSample'

type EmployeeKeys = keyof IEmployee

interface IHeader {
    display: string,
    key: EmployeeKeys,
}

enum sortOrder {
    ASC = 0,
    DESC = 1
}
interface ISortState {
    key: EmployeeKeys
    sortOrder: sortOrder
}

interface IMergeSortPageProps {
    defaultSort?: EmployeeKeys
}

export const MergeSortPage: FC<IMergeSortPageProps> = (props: IMergeSortPageProps) => {


    const sortTable = (key: EmployeeKeys) => {

        let newSortOrder: sortOrder = sortOrder.ASC;
        if(sortState!==null) {
            const c = (sortState as ISortState)
            if(c.key === key) {
                if(c.sortOrder === sortOrder.ASC)
                    newSortOrder=sortOrder.DESC
            }
        }

        // default
        let compareCb = (a: IEmployee, b: IEmployee) => a[key] < b[key]
        const isName = key === 'name'
        if(isName) {
            compareCb = (a: IEmployee, b: IEmployee) => a.name.first < b.name.first
        } 
        if(newSortOrder === sortOrder.DESC) {
            compareCb = isName 
                ? (a: IEmployee, b: IEmployee) => b.name.first < a.name.first 
                : (a: IEmployee, b: IEmployee) => b[key] < a[key]
        }

        // changing the sortOrder like this...
        setSortState({key, sortOrder: newSortOrder})
        // changing the indexes order with the following
        setTableData(tableData.slice().mergeSort(compareCb))
    }

    useEffect(() => {
        if(props.defaultSort)
            sortTable(props.defaultSort)
    },
    [])

    const [tableData, setTableData] = useState<Array<IEmployee>>(PeopleCollection.getEmployeeData())
    const [sortState, setSortState] = useState<nullable<ISortState>>(null)

    const headerData: Array<IHeader> = [
        {
            display: 'Name',
            key: 'name',
        },
        {
            display: 'Email',
            key: 'email',
        },
        {
            display: 'Salary',
            key: 'salary',
        },
        {
            display: 'Profession',
            key: 'profession',
        }
    ]

    const renderTableHead = (Headers: Array<IHeader>) => {
        let currentSort: nullable<EmployeeKeys> = null
        if(sortState!==null) {
            currentSort = sortState.key
        }
        return <div className="flex-item tableHead noselect">
            {Headers.map(h => {
                const { key, display } = h
                const isSelected = key === currentSort
                let className = "stretched centeredAligned"
                if(isSelected) className+=" active"
                const onClick = () => sortTable(key)
                return <div className={className} onClick={onClick} key={key}>{display}</div>
            })}
        </div>
    }

    const renderTableBody = () => {
        return <div className="flex-item tableBody vertical">
                {tableData.map(t => 
                    <div className="flex-item stretched" key={t.name.first+"_"+t.name.last}>
                        <div className="stretched centeredAligned">{t.name.first+" "+t.name.last}</div>
                        <div className="stretched centeredAligned">{t.email}</div>
                        <div className="stretched centeredAligned">{t.salary.toCurrency()}</div>
                        <div className="stretched centeredAligned">{t.profession}</div>
                    </div>)}
            </div>
    }


    return <div className="table">
        {renderTableHead(headerData)}
        {renderTableBody()}
    </div>
}