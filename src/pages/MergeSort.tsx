import React, { FC, useState, useEffect } from 'react'
import { FamilyName } from './../enums'

interface IMergeSortPageProps {}
export const MergeSortPage: FC<IMergeSortPageProps> = (props: IMergeSortPageProps) => {


    useEffect(() => {
        setTableData(
            tableData.slice()
                .mergeSort((a, b) => a.sallary < b.sallary)
        )
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
            sallary: 69999,
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
            sallary: 99999,
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
            sallary: 1000000,
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
            sallary: 11500000000,
            email: 'billssemail@gmail.com'
        },
    ]

    const [tableData, setTableData] = useState<Array<IEmployee>>(data)

    const renderTableHead = (Headers: Array<string>) => {
        return <div className="flex-item tableHead">
            {Headers.map(h => <div className="stretched centeredAligned" key={h}>{h}</div>)}
        </div>
    }

    const renderTableBody = () => {
        return <div className="flex-item tableBody vertical">
                {tableData.map(t => 
                    <div className="flex-item stretched" key={t.name.first+"_"+t.name.last}>
                        <div className="stretched centeredAligned">{t.name.first+" "+t.name.last}</div>
                        <div className="stretched centeredAligned">{t.email}</div>
                        <div className="stretched centeredAligned">{t.sallary.toCurrency()}</div>
                        <div className="stretched centeredAligned">{t.profession}</div>
                    </div>)}
            </div>
    }


    return <div className="table">
        {renderTableHead(['Name', 'Email', 'Salary', 'Profession'])}
        {renderTableBody()}
    </div>
    // return <div>DISPLAY THAT YOU CAN USE MERGE SORT HERE!!!</div>

}