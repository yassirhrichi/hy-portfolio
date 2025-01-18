import React from "react";

import { MessageSchema } from "@/lib/schemas/MessageSchema";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

export default function EmailTemplate({ name, email, message }: MessageSchema) {
  return (
    <Html>
      <Head />
      <Body
        style={{ fontFamily: "Courier, sans-serif", margin: 0, padding: 0 }}
      >
        <Container
          style={{ maxWidth: "600px", padding: "20px", margin: "auto" }}
        >
          <Heading style={{ color: "#333", textAlign: "center" }}>
            New Message from {name}
          </Heading>
          <Text>
            <strong>Email:</strong> {email}
          </Text>
          <Text>
            <strong>Message:</strong>
          </Text>
          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
