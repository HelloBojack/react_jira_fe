import { Input, Row, Col, Form, Button } from "antd";
import { ISearchInput } from "../data";
import { UserSelect } from "./UserSelect";

const SearchInput = ({
  searchParams,
  setsearchParams,
  userList,
}: ISearchInput) => {
  return (
    <>
      <Form labelCol={{ span: 4 }} initialValues={searchParams}>
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="项目名" name="name">
              <Input
                onChange={(e) =>
                  setsearchParams({ ...searchParams, name: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="负责人" name="personId">
              <UserSelect
                searchParams={searchParams}
                setsearchParams={setsearchParams}
                userList={userList}
              />
            </Form.Item>
          </Col>
          <Col span={8} style={{ textAlign: "right" }}>
            <Form.Item>
              <Button type="primary">新建项目</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default SearchInput;
