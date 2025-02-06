import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LearnTech
        </Typography>
        <ul
          style={{
            display: 'flex',
            listStyleType: 'none',
            margin: 0,
            padding: 0,
            flexGrow: 1,
          }}
        >
          <li style={{ marginRight: '20px' }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
              Início
            </Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link
              href="/pages/about"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Sobre
            </Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link
              href="/sentry-example-page"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Teste Sentry
            </Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};
