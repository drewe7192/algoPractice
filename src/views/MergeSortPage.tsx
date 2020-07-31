import React, { FC, useState, useEffect, ReactNode } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaUp,
  faSortAlphaDown,
  faSortNumericDown,
  faSortNumericUp,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

// predefined dataStore is stored here
import { PeopleCollection } from "../Containers/PeopleSample";

type NameKeys = keyof IPersonName;
type EmployeeKeys = keyof IEmployee | NameKeys;

enum sortType {
  Numberic,
  Alpha,
}

interface IHeader {
  display: string;
  key: EmployeeKeys;
  typeOfData: sortType;
}

enum sortOrder {
  ASC = 0,
  DESC = 1,
}
interface ISortState {
  key: EmployeeKeys;
  sortOrder: sortOrder;
}

interface IMergeSortPageProps {
  defaultSort?: EmployeeKeys;
}

export const MergeSortPage: FC<IMergeSortPageProps> = (
  props: IMergeSortPageProps
) => {
  // logic for sorting the tableData
  const sortTable = (key: EmployeeKeys, newSortOrder: sortOrder) => {
    const isName = key === "name";
    // default compare function
    let k = key as keyof IEmployee;
    let n = key as NameKeys;
    const isTypeOfName = key === "first" || key === "middle" || key === "last";

    // making this the default case...
    let compareCb = (a: IEmployee, b: IEmployee) => a.name.first < b.name.first;

    // ASC case first...
    if (newSortOrder === sortOrder.ASC) {
      if (isName) {
        compareCb = (a: IEmployee, b: IEmployee) => a.name.first < b.name.first;
      } else if (isTypeOfName) {
        compareCb = (a: IEmployee, b: IEmployee) =>
          (a.name[n] || "") < (b.name[n] || "");
      } else {
        compareCb = (a: IEmployee, b: IEmployee) => a[k] < b[k];
      }
    }

    // DESC case second
    if (newSortOrder === sortOrder.DESC) {
      if (isName) {
        compareCb = (a: IEmployee, b: IEmployee) => b.name.first < a.name.first;
      } else if (isTypeOfName) {
        compareCb = (a: IEmployee, b: IEmployee) =>
          (b.name[n] || "") < (a.name[n] || "");
      } else {
        compareCb = (a: IEmployee, b: IEmployee) => b[k] < a[k];
      }
    }

    // changing the sortOrder like this...
    setSortState({ key, sortOrder: newSortOrder });
    // changing the indexes order with the following
    setTableData(tableData.slice().mergeSort(compareCb));
  };

  // Same as ComponentDidMount.
  // Will sortTable if a defaultSort is passed in
  useEffect(() => {
    if (props.defaultSort) sortTable(props.defaultSort, sortOrder.ASC);
  }, []);

  // holds raw data for table
  const [tableData, setTableData] = useState<Array<IEmployee>>(
    PeopleCollection.getEmployeeData()
  );
  // Holds data for what is currently sorted and how it is sorted.
  const [sortState, setSortState] = useState<nullable<ISortState>>(null);

  // Header Data that is used to create the Header...
  const headerData: Array<IHeader> = [
    {
      display: "Name",
      key: "fullName",
      typeOfData: sortType.Alpha,
    },
    /* 
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
        */
    {
      display: "Email",
      key: "email",
      typeOfData: sortType.Alpha,
    },
    {
      display: "Salary",
      key: "salary",
      typeOfData: sortType.Numberic,
    },
    {
      display: "Profession",
      key: "profession",
      typeOfData: sortType.Alpha,
    },
  ];

  // Responsible for creating the table Header
  const renderTableHead = (Headers: Array<IHeader>) => {
    let currentSort: nullable<EmployeeKeys> = null;
    if (sortState !== null) {
      currentSort = sortState.key;
    }
    return (
      <div className="flex-item tableHead noselect">
        {Headers.map((h) => {
          const { key, display, typeOfData } = h;
          const isSelected = key === currentSort;
          let className = "stretched centeredAligned ellipsis";

          let newSortOrder: sortOrder = sortOrder.ASC;
          if (sortState !== null) {
            const c = sortState as ISortState;
            if (c.key === key) {
              if (c.sortOrder === sortOrder.ASC) newSortOrder = sortOrder.DESC;
            }
          }

          let sortIcon: ReactNode = null;
          if (isSelected) {
            className += " active";
            let icon: IconDefinition;
            const isNumericDataType = typeOfData == sortType.Numberic;
            if (newSortOrder === sortOrder.ASC) {
              icon = isNumericDataType ? faSortNumericUp : faSortAlphaUp;
            } else {
              icon = isNumericDataType ? faSortNumericDown : faSortAlphaDown;
            }
            sortIcon = <FontAwesomeIcon icon={icon} />;
          }
          const onClick = () => sortTable(key, newSortOrder);
          return (
            <div className={className} onClick={onClick} key={key}>
              {sortIcon}
              {display}
            </div>
          );
        })}
      </div>
    );
  };

  // Responsible for creating a single CELL in table body
  const createTableCell = (cellValue: string): JSX.Element => {
    const tableRowClassName = "stretched centeredAligned ellipsis";
    return <div className={tableRowClassName}>{cellValue}</div>;
  };

  // Responsible for creating the table body...
  const renderTableBody = () => {
    const tableRowClassName = "stretched centeredAligned";
    return (
      <div className="flex-item tableBody vertical">
        {tableData.map((t) => (
          <div
            className="flex-item stretched tableRow"
            key={t.name.first + "_" + t.name.last}
          >
            {createTableCell(t.fullName)}
            {/*
                        {createTableCell(t.name.first)}
                        {createTableCell(t.name.last)}
                        */}
            {createTableCell(t.email)}
            {createTableCell(t.salary.toCurrency())}
            {createTableCell(t.profession)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="table">
      {renderTableHead(headerData)}
      {renderTableBody()}
    </div>
  );
};
