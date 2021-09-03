import { Input, Select, Row, Col, Form, Button } from "antd";
import { IUser } from "../data";
const { Option } = Select;
interface ISearchInput {
  searchParams: {
    name: string;
    personId: string;
  };
  setsearchParams: (searchParams: ISearchInput["searchParams"]) => void;
  userList: IUser[];
}
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
              <Select<string>
                style={{ width: 120 }}
                onChange={(e) =>
                  setsearchParams({ ...searchParams, personId: e || "" })
                }
                allowClear
              >
                {userList.map((user) => (
                  <Option value={String(user.id)} key={user.id}>
                    {user.name}
                  </Option>
                ))}
              </Select>
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
