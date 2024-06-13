import { Button } from "antd";

import Layouts from "@/components/layouts";

import type { NextPageWithLayout } from "../_app";

const MyOKRsPage: NextPageWithLayout = () => {
  return <Button type="link">My OKRs</Button>;
};

export default MyOKRsPage;

MyOKRsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layouts>{page}</Layouts>;
};
