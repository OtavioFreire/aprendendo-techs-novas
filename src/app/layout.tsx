import { Header } from './components/header';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
};

export default Layout;
