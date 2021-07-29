import React, { useEffect } from "react";
import { Table, Button } from "antd";
import { useArray } from "utils";
const columns = [
  {
    title: "name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "age",
    dataIndex: "age",
    key: "age",
  },
];
interface IPerson {
  name: string;
  age: number;
}
const TSTest = () => {
  const personList: IPerson[] = [
    {
      name: "bojack",
      age: 25,
    },
    {
      name: "ww",
      age: 24,
    },
  ];

  const { newArray, addItem, deleteItem, clearItem } = useArray(personList);
  useEffect(() => {});

  return (
    <>
      <Button onClick={() => addItem({ name: "sb", age: 1 })}>ADD</Button>
      <Button onClick={() => deleteItem(0)}>DELETE</Button>
      <Button onClick={() => clearItem()}>CLEAR</Button>
      <Table columns={columns} dataSource={newArray} />
    </>
  );
};
export default TSTest;
