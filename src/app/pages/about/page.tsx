import Link from "@mui/material/Link";

export default function About() {
  return (
    <html lang="pt-BR">
      <body>
        <br />
        <br />
        <h1>SOBRE</h1>

        <ul>
          <li style={{ marginRight: '20px' }}>
            <Link
              href="/sentry-example-page"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <p>Sobre</p>
            </Link>
          </li>
        </ul>
      </body>
    </html>
  );
}
