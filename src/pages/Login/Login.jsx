import React, { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import * as Yup from "yup";
import {
  StyledDiv,
  ErrorMessage,
  Card,
  Card2,
  Form,
  Heading,
  Field,
  UserIcon,
  InputField,
  PasswordIcon,
  ICONShow,
  ICONHide,
  Button1,
  Button3,
} from "./style";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  otp: Yup.string(),
});

const Login = () => {
  const { setisAuthorized, isLoading, setIsLoading } = useAuthContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [passwordShow, setPasswordShow] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handlePasswordShow = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
    setPasswordShow(!passwordShow);
  };

  useEffect(() => {
    setErrors({});
  }, []);

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") setUsername(value);
    if (id === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await validationSchema.validate(
        {
          username,
          password,
        },
        { abortEarly: false }
      );

       const intialvalues = {
        username: "admin",
        password: "yas123.654",
       }
    

      if (username === intialvalues.username && password === intialvalues.password) {
        localStorage.setItem("token", "1234567890");
        setisAuthorized(true);
        setIsLoading(false);
        toast.success("Login Successfully");
        navigate("/");
      } else {
        setErrors({ login: "Username or password is incorrect." });
        setIsLoading(false);
        toast.error("invalid username or password");
      }
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <StyledDiv>
      <Card>
        <Card2>
          <Form onSubmit={handleSubmit}>
            <Heading>Login</Heading>
            <Field>
              <UserIcon />
              <InputField
                type="text"
                id="username"
                placeholder="Username"
                autoComplete="off"
                onChange={handleChangeInput}
                value={username}
              />
            </Field>
            {errors && errors.username && (
              <ErrorMessage>{errors.username}</ErrorMessage>
            )}

            <Field>
              <PasswordIcon />
              <InputField
                type={passwordType}
                id="password"
                onChange={handleChangeInput}
                value={password}
                placeholder="Password"
                autoComplete="off"
              />
              {passwordShow ? (
                <ICONShow onClick={handlePasswordShow} />
              ) : (
                <ICONHide onClick={handlePasswordShow} />
              )}
            </Field>
            <Button1 type="submit">
              {isLoading ? "Loading ... " : "LOG IN"}
            </Button1>
            <Button3>Forgot Password</Button3>
          </Form>
        </Card2>
      </Card>
    </StyledDiv>
  );
};

export default Login;

