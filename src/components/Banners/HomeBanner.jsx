import React from 'react';
import Link from 'next/link';

import Button from '@mui/material/Button';

const HomeBanner = () => {
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
