import type { CheckboxProps } from "antd";
import { Button, Checkbox, Dropdown, Input } from "antd";

import Layout from "@/components/layouts";

import type { NextPageWithLayout } from "./_app";

const { Search } = Input;

const HomePage: NextPageWithLayout = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="App">
      <Dropdown
        menu={{
          items: [
            {
              key: "1",
              label: (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.antgroup.com"
                >
                  1st menu item
                </a>
              ),
            },
            {
              key: "2",
              label: (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.aliyun.com"
                >
                  2nd menu item
                </a>
              ),
            },
            {
              key: "3",
              label: (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.luohanacademy.com"
                >
                  3rd menu item
                </a>
              ),
            },
          ],
        }}
        placement="bottomLeft"
        arrow
      >
        <Button>bottomLeft</Button>
      </Dropdown>
      <br />
      <Checkbox onChange={onChange}>Checkbox</Checkbox>
      <br />
      <Search
        placeholder="input search text"
        // onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
