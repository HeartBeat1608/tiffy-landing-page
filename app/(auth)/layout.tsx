import { Metadata } from "next";
import { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";
import { themeConfig } from "@/components/theme";

export const metadata: Metadata = {
  title: "Login | Tiffy | Home Served Tiffins",
};

const AuthLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ConfigProvider theme={themeConfig}>
      <div className="min-h-screen bg-cover bg-gradient-to-b from-emerald-100 to-emerald-300 md:p-8 p-4">
        {children}
      </div>
    </ConfigProvider>
  );
};

export default AuthLayout;
