import React from "react";
import logo from "../../logo.svg";
import {
  AspectRatio,
  Button,
  Card,
  Checkbox,
  Flex,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
import { FaceIcon } from "@radix-ui/react-icons";

const Index = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AspectRatio ratio={16 / 8}>
          <img
            src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
            alt="A house in a forest"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-2)",
            }}
          />
        </AspectRatio>
        <img src={logo} className="w-9 " alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="outline" size="4">
          Bookmark
          <FaceIcon />
        </Button>
        <Text as="label" size="9">
          <Flex gap="2">
            <Checkbox size="3" defaultChecked /> Agree to Terms and Conditions
          </Flex>
        </Text>
        <Card size="2">
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: "block",
                objectFit: "cover",
                width: "100%",
                height: 140,
                backgroundColor: "var(--gray-5)",
              }}
            />
          </Inset>
          <Text as="p" size="3">
            <Strong>Typography</Strong> is the art and technique of arranging
            type to make written language legible, readable and appealing when
            displayed.
          </Text>
        </Card>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Index;
