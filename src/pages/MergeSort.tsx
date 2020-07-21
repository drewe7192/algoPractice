import React, { FC, useState, useEffect, ReactNode } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortAlphaUp, faSortAlphaDown, faSortDown, faSortNumericDown, faSortNumericUp, IconDefinition } from '@fortawesome/free-solid-svg-icons'

import { PeopleCollection } from './../Data/PeopleSample'

type NameKeys = keyof IPersonName
type EmployeeKeys = keyof IEmployee | NameKeys

enum sortType {
    Numberic,
    Alpha
}

interface IHeader {
    display: string,
    key: EmployeeKeys,
    typeOfData: sortType
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

    const sortTable = (key: EmployeeKeys, newSortOrder: sortOrder) => {
        const isName = key === 'name'
        // default compare function
        let k = key as keyof IEmployee
        let n = key as NameKeys
        const isTypeOfName = key === 'first' || key === 'middle' || key === "last"

        // making this the default case...
        let compareCb = (a: IEmployee, b: IEmployee) => a.name.first < b.name.first

        // ASC case first...
        if(newSortOrder === sortOrder.ASC) {
            if(isName) {
                compareCb = (a: IEmployee, b: IEmployee) => a.name.first < b.name.first
            } else if(isTypeOfName) {
                compareCb = (a:IEmployee,b:IEmployee) => (a.name[n] || '') < (b.name[n]  || '')
            } else {
                compareCb = (a: IEmployee, b: IEmployee) => a[k] < b[k]
            }
        }

        // DESC case second
        if(newSortOrder === sortOrder.DESC) {
            if(isName) {
                compareCb = (a: IEmployee, b: IEmployee) => b.name.first < a.name.first
            } else if(isTypeOfName) {
                compareCb = (a:IEmployee,b:IEmployee) => (b.name[n]  || '') < (a.name[n] || '')
            } else {
                compareCb = (a: IEmployee, b: IEmployee) => b[k] < a[k]
            }
        }

        // changing the sortOrder like this...
        setSortState({key, sortOrder: newSortOrder})
        // changing the indexes order with the following
        setTableData(tableData.slice().mergeSort(compareCb))

    }

    useEffect(() => 
    {
        if(props.defaultSort) sortTable(props.defaultSort, sortOrder.ASC)
    },
    [])

    const [tableData, setTableData] = useState<Array<IEmployee>>(PeopleCollection.getEmployeeData())
    const [sortState, setSortState] = useState<nullable<ISortState>>(null)

    const headerData: Array<IHeader> = [
        {
            display: 'First Name',
            key: 'first',
            typeOfData: sortType.Alpha
        },
        {
            display: 'Last Name',
            key: 'last',
            typeOfData: sortType.Alpha
        },
        {
            display: 'Email',
            key: 'email',
            typeOfData: sortType.Alpha
        },
        {
            display: 'Salary',
            key: 'salary',
            typeOfData: sortType.Numberic
        },
        {
            display: 'Profession',
            key: 'profession',
            typeOfData: sortType.Alpha
        }
    ]

    const renderTableHead = (Headers: Array<IHeader>) => {
        let currentSort: nullable<EmployeeKeys> = null
        if(sortState!==null) {
            currentSort = sortState.key
        }
        return <div className="flex-item tableHead noselect">
            {Headers.map(h => {
                const { key, display, typeOfData } = h
                const isSelected = key === currentSort
                let className = "stretched centeredAligned"

                let newSortOrder: sortOrder = sortOrder.ASC;
                if(sortState!==null) {
                    const c = (sortState as ISortState)
                    if(c.key === key) {
                        if(c.sortOrder === sortOrder.ASC)
                            newSortOrder = sortOrder.DESC
                    }
                }

                let sortIcon: ReactNode = null
                if(isSelected) {
                    className+=" active"
                    let icon: IconDefinition
                    const isNumericDataType = typeOfData == sortType.Numberic
                    if(newSortOrder === sortOrder.ASC) {
                        icon = isNumericDataType ? faSortNumericUp : faSortAlphaUp
                    } else {
                        icon = isNumericDataType ? faSortNumericDown: faSortAlphaDown
                    }
                    sortIcon = <FontAwesomeIcon icon={icon} />
                }
                const onClick = () => sortTable(key, newSortOrder)
                return <div className={className} onClick={onClick} key={key}>{sortIcon}{display}</div>
            })}
        </div>
    }

    const renderTableBody = () => {
        return <div className="flex-item tableBody vertical">
                {tableData.map(t => 
                    <div className="flex-item stretched" key={t.name.first+"_"+t.name.last}>
                        {/*<div className="stretched centeredAligned">{t.name.first+" "+t.name.last}</div>*/}
                        <div className="stretched centeredAligned">{t.name.first}</div>
                        <div className="stretched centeredAligned">{t.name.last}</div>
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