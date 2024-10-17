import NotificationsBeta from "@/components/account/NotificationsBeta";
import { fakeNotifications } from "@/ui/testDatas";
import React from "react";

const page = () => {
  return <NotificationsBeta notifications={fakeNotifications} />;
};

export default page;
