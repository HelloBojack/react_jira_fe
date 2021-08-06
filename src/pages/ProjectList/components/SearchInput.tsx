import React from "react";
import { Input, Select, Row, Col, Form } from "antd";
const { Option } = Select;
interface ISearchInput {
  searchParams: {
    name: string;
    organization: string;
  };
  setsearchParams: (searchParams: ISearchInput["searchParams"]) => void;
}
const SearchInput = ({ searchParams, setsearchParams }: ISearchInput) => {
  return (
    <>
      <Form>
        <Row>
          <Col span={6} offset={6}>
            <Form.Item name="name">
              <Input
                onChange={(e) =>
                  setsearchParams({ ...searchParams, name: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="organization">
              <Select<string>
                style={{ width: 200 }}
                onChange={(e) =>
                  setsearchParams({ ...searchParams, organization: e })
                }
              >
                <Option value=""> </Option>
                <Option value="外卖组">外卖组</Option>
                <Option value="团购组">团购组</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default SearchInput;
