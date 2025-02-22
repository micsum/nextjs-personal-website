import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Hr,
  Heading,
  Row,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  subject: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  subject,
}) => {
  const messageArray = message.split("\n");

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>New message from {name}</Preview>
        <Container style={container}>
          <Text style={centeredText}>New message from {name}</Text>
          <Text style={centeredText}>
            <Link
              style={{ ...centeredText, ...anchor }}
              href={`mailto:${email}`}
            >
              {email}
            </Link>
          </Text>

          <Section style={box}>
            <Hr style={hr} />
            <Heading as="h2" style={subjectStyle}>
              <u>{subject}</u>
            </Heading>
            <Hr style={hrTransparent} />

            {messageArray.map((line, index) => (
              <Text key={index} style={text}>
                {line ? line : "\u00A0"}
              </Text>
            ))}
            <Hr style={hr} />
          </Section>

          <Section style={box}>
            <Row style={socialContainer}>
              <Text style={footer}>
                Follow me on:
                <Link style={iconLink} href="https://github.com/micsum">
                  <img
                    src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                    width={20}
                    height={20}
                    alt="github"
                  ></img>
                </Link>
                <Link
                  style={iconLink}
                  href="https://www.linkedin.com/in/michaelsum"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
                    width={20}
                    height={20}
                    alt="linkedin"
                  ></img>
                </Link>
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const main = {
  backgroundColor: "#000",
  fontFamily: "Georgia, serif",
  padding: "60px 0",
};

const container = {
  backgroundColor: "#1b1c20",
  margin: "0 auto",
  padding: "20px 0 48px",
  borderRadius: "12px",
  boxShadow: "0 0 6px 0 #82d4e6",
  textAlign: "center" as const,
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#82d4e6",
  margin: "20px 0",
};

const hrTransparent = {
  borderColor: "transparent",
  margin: "20px 0",
};

const subjectStyle = {
  color: "white",
  textAlign: "center" as const,
};

const text = {
  color: "#fff",
  fontSize: "16px",
  lineHeight: "24px",
  margin: 0,
  textAlign: "left" as const,
};

const centeredText = {
  color: "#fff",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 auto",
  textAlign: "center" as const,
};

const anchor = {
  color: "#82d4e6",
  textDecoration: "none",
};

const socialContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
};

const footer = {
  color: "#8898aa",
  fontSize: "14px",
  marginRight: "8px",
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
};

const iconLink = {
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "middle",
};
