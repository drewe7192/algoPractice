import React, { FC, useState, useEffect } from 'react'
import { FamilyName } from './../enums'

interface IHeader {
    display: string,
    key: keyof IEmployee,
    compareCb: (a: IEmployee, b: IEmployee) => boolean,
}

interface IMergeSortPageProps {}

export const MergeSortPage: FC<IMergeSortPageProps> = (props: IMergeSortPageProps) => {


    const sortTable = (compareFn: (a: IEmployee, b: IEmployee) => boolean) => {
        setTableData(
            tableData.slice()
                .mergeSort(compareFn)
        )        
    }


    useEffect(() => {
        sortTable((a, b) => a.salary < b.salary)
    },
    [])

    const data: Array<IEmployee> = [
        {
            name: {
                first: 'Felipe',
                last: 'Ferreira'
            },
            age: 31,
            familyName: FamilyName.Ferreira,
            profession: 'programmer',
            salary: 69999,
            email: 'felipesemail@gmail.com'
        },
        {
            name: {
                first: 'Rebecca',
                last: 'Amos'
            },
            age: 31,
            familyName: FamilyName.Ferreira,
            profession: 'Nurse Practicioner',
            salary: 99999,
            email: 'rebeccasemail@gmail.com'
        },
        {
            name: {
                first: 'Drew',
                last: 'Sutherland'
            },
            age: 26,
            familyName: FamilyName.Sutherland,
            profession: 'entrepreneur',
            salary: 1000000,
            email: 'drewsemail@gmail.com'
        },
        {
            name: {
                first: 'Bill',
                last: 'Gates'
            },
            age: 64,
            familyName: FamilyName.Gates,
            profession: 'Philanthropist',
            salary: 11500000000,
            email: 'billssemail@gmail.com'
        },
    ]

    const [tableData, setTableData] = useState<Array<IEmployee>>(data)

    const headerData = [
        'Name', 
        'Email', 
        'Salary', 
        'Profession'
    ]

    const _headerData: Array<IHeader> = [
        {
            display: 'Name',
            compareCb:  (a: IEmployee, b: IEmployee) => a.name.first < b.name.first,
            key: 'name',
        },
        {
            display: 'Email',
            key: 'email',
            compareCb:  (a: IEmployee, b: IEmployee) => a.email < b.email
        },
        {
            display: 'Salary',
            key: 'salary',
            compareCb:  (a: IEmployee, b: IEmployee) => a.salary < b.salary
        },
        {
            display: 'Profession',
            key: 'profession',
            compareCb:  (a: IEmployee, b: IEmployee) => a.profession < b.profession
        }
        // 'Profession'
    ]

    const renderTableHead = (Headers: Array<IHeader>) => {
        return <div className="flex-item tableHead">
            {Headers.map(h => <div className="stretched centeredAligned" onClick={() => {sortTable(h.compareCb)}} key={h.key}>{h.display}</div>)}
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
        {renderTableHead(_headerData)}
        {renderTableBody()}
    </div>
    // return <div>DISPLAY THAT YOU CAN USE MERGE SORT HERE!!!</div>

}