import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import * as z from "zod";

import Layout from "../component/layout";
import { Input } from "../component/input";
import Button from "../component/button";
import { useToken } from "../utils/states/token";
import Swal from "../utils/swal";
import { login } from "../utils/api/login";

const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function Login() {
  const { changeToken } = useToken();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleLogin(data) {
    try {
      const result = await login(data);
      changeToken(JSON.stringify(result));
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  return (
    <Layout className="layout-login">
      <p className="logintitle">Login</p>
      <form className="form-login" onSubmit={handleSubmit(handleLogin)}>
        {/* <p className="usertitle">Username</p> */}
        <Input
        className="input-login"
          register={register}
          name="username"
          label="Username"
          error={errors.username?.message}
        />
        {/* <p className="pw">Password</p> */}
        <Input
        className="input-regist"
          register={register}
          name="password"
          label="Password"
          type="password"
          error={errors.password?.message}
        />
        <Button className="submit-login"label="Submit" type="submit" />
      </form>
    </Layout>
  );
}