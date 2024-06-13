import { Button } from "antd";

import Layouts from "@/components/layouts";

import type { NextPageWithLayout } from "../_app";

const CompaniesPage: NextPageWithLayout = () => {
  return <Button type="default">Companies OKRs</Button>;
};
export default CompaniesPage;
CompaniesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layouts>{page}</Layouts>;
};
