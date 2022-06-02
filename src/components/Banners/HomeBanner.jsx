import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Button from '@mui/material/Button';

const HomeBanner = ({ link, name, openMenu }) => {
  const router = useRouter();

  return (
    <div className="home-banner">
      <div className="home-banner__content-wrapper">
        <div className="home-banner__content">
          <h1>Seneve Network</h1>
          <p>Amour | Engagement | Formation</p>
          <Link href="/contact">
            <Button variant="contained">Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
