import { useState, PropsWithChildren } from 'react';
import Stack from '@mui/material/Stack';
import Sidebar from 'layouts/main-layout/sidebar';
import Topbar from 'layouts/main-layout/topbar';

const MainLayout = ({ children }: PropsWithChildren) => {
  const [searchText, setSearchText] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Declare the isClosing state

  return (
    <Stack direction="row" width={1} minHeight="100vh">
      <Sidebar 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
        setIsClosing={setIsClosing} // Pass setIsClosing to Sidebar
      />
      <Stack component="main" direction="column" width={{ xs: 1, lg: 'calc(100% - 252px)' }} flexGrow={1}>
        <Topbar
          isClosing={isClosing}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {children}
      </Stack>
    </Stack>
  );
};

export default MainLayout;
