'use client';
import * as Sentry from '@sentry/nextjs';

export default function Home() {
  return (
    <html lang="pt-BR">
      <body>
        <br />
        <br />
        <h1>Bem vindo ao teste</h1>

        <button
          type="button"
          style={{
            padding: '12px',
            cursor: 'pointer',
            backgroundColor: '#AD6CAA',
            borderRadius: '4px',
            border: 'none',
            color: 'white',
            fontSize: '14px',
            margin: '18px',
          }}
          onClick={async () => {
            await Sentry.startSpan(
              {
                name: 'Example Frontend Span',
                op: 'test',
              },
              async () => {
                const res = await fetch('/api/sentry-example-api');
                if (!res.ok) {
                  throw new Error('Sentry Example Frontend Error');
                }
              },
            );
          }}
        >
          Throw error!!
        </button>
      </body>
    </html>
  );
}
