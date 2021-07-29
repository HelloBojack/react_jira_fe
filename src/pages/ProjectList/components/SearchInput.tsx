import React from "react";
import { Input, Select, Row, Col, Form } from "antd";
const { Option } = Select;
interface ISearchInput {
  searchParams: {
    name: string;
    workname: string;
  };
  setsearchParams: (searchParams: ISearchInput["searchParams"]) => void;
}
const SearchInput = ({ searchParams, setsearchParams }: ISearchInput) => {
  return (
    <>
      <Form>
        <Row>
          <Col span={6} offset={6}>
            <Form.Item name="workname">
              <Input
                placeholder="input placeholder"
                onChange={(e) =>
                  setsearchParams({ ...searchParams, workname: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="name">
              <Select<string>
                style={{ width: 200 }}
                onChange={(e) => setsearchParams({ ...searchParams, name: e })}
              >
                <Option value="bojack">bojack</Option>
                <Option value="xlk">xlk</Option>
                <Option value="w">w</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default SearchInput;
