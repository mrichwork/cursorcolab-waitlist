import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

export const CursorCoLabWelcomeEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Thanks for Joining the CursorCoLab Waitlist!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://cursorcolab-waitlist.vercel.app/logo-copy.png`}
          width="300"
          height="65"
          alt="CursorCoLab Logo"
          style={logo}
        />
        <Text style={greeting}>Hey {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the CursorCoLab waitlist.
        </Text>
        <Text style={paragraph}>
          CursorCoLab is a collaborative coding platform designed to work alongside the tools you already use. We're focused on making it easier to work on code together, with flexible saving options and clean integrations.
        </Text>
        <Text style={paragraph}>
          You'll hear from us when there's something to share.
        </Text>
        <Text style={signOff}>
          – The CursorCoLab team
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the CursorCoLab waitlist.
          If you believe this is a mistake, feel free to ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

CursorCoLabWelcomeEmail.PreviewProps = {
  userFirstname: "User",
} as EmailProps;

export default CursorCoLabWelcomeEmail;

const main = {
  background: "#000000",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#fefefe",
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1e1e1e",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
  color: "#fefefe",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
  color: "#fefefe",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
  color: "#fefefe",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
