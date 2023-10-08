"use client";
import useMergeState from "@/hooks/useMergeState";
import { Button, Card, Input, message } from "antd";
import React, { useState } from "react";

const LoginPage = () => {
  const [messageApi, contextHolder] = message.useMessage({ duration: 2 });
  const [loginData, setLoginData] = useMergeState({
    phone: "",
    otp: "",
  });
  const [otpSent, setOtpSent] = useState(false);

  function validate() {
    if (!loginData.phone) {
      messageApi.error("Please enter phone number");
      return false;
    }

    if (loginData.phone.length !== 10) {
      messageApi.error("Phone numbers should be 10 digits long");
      return false;
    }

    if (!loginData.phone.match(/\d+/g)) {
      messageApi.error("Phone numbers should only contain digits");
      return false;
    }

    if (!loginData.otp && otpSent) {
      messageApi.error("Please enter OTP");
      return false;
    }

    return true;
  }

  function handleLogin() {
    if (!validate()) return;

    if (!otpSent) {
      setOtpSent(true);
      messageApi.success("OTP sent successfully");
      return;
    } else {
      console.log({ ...loginData, phone: "+91" + loginData.phone });
      messageApi.success("Logged in successfully");
    }
  }

  function handleResendOtp() {
    if (!loginData.phone) {
      messageApi.error("Please enter phone number");
      return;
    }

    messageApi.success("OTP sent successfully");
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center">
      {contextHolder}
      <Card title="Login" className="max-w-sm w-full mx-4">
        <div className="flex flex-col gap-4">
          <Input
            addonBefore="+91"
            autoComplete="false"
            onChange={(e) => setLoginData({ phone: e.target.value })}
          />
          <Input.Password
            addonBefore="OTP"
            autoComplete="false"
            maxLength={6}
            disabled={!loginData.phone || !otpSent}
            onChange={(e) => setLoginData({ otp: e.target.value })}
          />
          <div className="flex gap-4">
            <Button type="primary" onClick={handleLogin}>
              {otpSent ? "Verify" : "Send OTP"}
            </Button>
            <Button onClick={handleResendOtp}>Resend OTP ?</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
