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

export const CursorCoLabWaitlistEmail = ({ userFirstname }: EmailProps) => (
  <Html>
    <Head />
    <Preview>You’re on the CursorCoLab waitlist</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* CursorCoLab Logo */}
        <Img
          src="https://cursorcolab-waitlist.vercel.app/logo.png"
          width="240"
          alt="CursorCoLab"
          style={logo}
        />

        <Text style={greeting}>Hey {userFirstname},</Text>

        <Text style={paragraph}>
          Thanks for joining the CursorCoLab waitlist.
        </Text>

        <Text style={paragraph}>
          CursorCoLab is a collaborative coding platform designed to work
          alongside the tools you already use, with flexible saving options and
          broad editor integrations.
        </Text>

        <Text style={signOff}>
          – The CursorCoLab team
        </Text>

        <Hr style={hr} />

        <Text style={footer}>
          You received this email because you signed up for the CursorCoLab
          waitlist.
        </Text>
      </Container>
    </Body>
  </Html>
);

CursorCoLabWaitlistEmail.PreviewProps = {
  userFirstname: "Matt",
} as EmailProps;

export default CursorCoLabWaitlistEmail;

const main = {
  background: "#000000",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#fefefe",
};

const container = {
  margin: "0 auto",
  padding: "28px 32px 44px",
  backgroundColor: "#1e1e1e",
  borderRadius: "12px",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto 28px",
  display: "block",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "18px",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#2d4f6b",
  margin: "28px 0",
};

const footer = {
  color: "#9aa0b2",
  fontSize: "12px",
};
