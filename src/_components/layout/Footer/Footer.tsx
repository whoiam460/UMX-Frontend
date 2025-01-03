import { Container, Title, Button, Text } from "@/_components";

const Footer = () => {
  return (
    <footer>
      <div className="bg-primary py-12">
        <Container>asdaa</Container>
      </div>
      <div className="bg-accent">
        <Container className="w-full flex justify-between items-center h-full py-[6px]">
          <Title level={3}>Наскільки зручно на UMX?</Title>
          <Button>Поділитися</Button>
        </Container>
      </div>
      <div className="bg-primary-darken-2 py-2">
        <Text level={5} className="text-neutral-darken-2 w-full text-center">
          © Ukranian Market Exchange 2025 Всі права захищені
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
