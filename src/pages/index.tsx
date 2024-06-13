import type { CheckboxProps } from "antd";
import { Button, Checkbox, Input } from "antd";

import Layout from "@/components/layouts";

import type { NextPageWithLayout } from "./_app";

const { Search } = Input;

const HomePage: NextPageWithLayout = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="App">
      <Button type="default">Button</Button>
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
