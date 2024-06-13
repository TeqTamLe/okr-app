import { Button } from "antd";

import Layouts from "@/components/layouts";

import type { NextPageWithLayout } from "../_app";

const TeamPage: NextPageWithLayout = () => {
  return <Button type="text">Team OKRs</Button>;
};
export default TeamPage;

TeamPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layouts>{page}</Layouts>;
};
