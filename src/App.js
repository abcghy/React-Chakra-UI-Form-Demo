import {
  Box,
  Flex,
  Button,
  Container,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  FormHelperText,
  FormErrorMessage,
  Text
} from "@chakra-ui/react";

import { React, useState } from "react";
import { ReactComponent as Warning } from "./assets/warning.svg";
import { useForm } from "react-hook-form";

export default function App() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isValid, isDirty }
  } = useForm({
    mode: "onChange"
  });
  const onSubmit = (values) => console.log(values);
  // console.log(errors);
  // console.log(watch("email"));
  console.log(isValid);
  return (
    <Container w="320px">
      <Flex h="100vh" flexDirection="column" justifyContent="center">
        <Image w="160px" h="64px" src="" alignSelf="center" />
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">邮箱</FormLabel>
          <InputGroup>
            <Input
              type="email"
              placeholder="请输入"
              id="email"
              {...register("email", {
                required: true,
                minLength: 5
              })}
            />
            {errors.email && (
              <InputRightElement children={<Warning stroke="red" />} />
            )}
          </InputGroup>
          <FormErrorMessage>请检查邮箱</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.password} mt="15px">
          <Flex justifyContent="space-between">
            <FormLabel htmlFor="password">密码</FormLabel>
            <Text>忘记密码？</Text>
          </Flex>
          <InputGroup>
            <Input
              type="password"
              placeholder="输入密码"
              id="password"
              {...register("password", {
                required: true,
                minLength: 6
              })}
            />
            {errors.password && (
              <InputRightElement children={<Warning stroke="red" />} />
            )}
          </InputGroup>
          <FormErrorMessage>密码错误</FormErrorMessage>
        </FormControl>
        <Button w="full" mt="30px" onClick={handleSubmit(onSubmit)}>
          登录
        </Button>
        {/* <Button
          leftIcon={<Box w="10px" h="10px" bg="white" />}
          w="full"
          mt="10px"
        >
          使用Google登录
        </Button> */}
        <Button w="full" mt="20px">
          新用户注册
        </Button>
      </Flex>
    </Container>
  );
}
