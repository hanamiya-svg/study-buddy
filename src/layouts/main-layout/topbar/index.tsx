import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import LogoImg from 'assets/images/Logo.png';
import LanguageSelect from './LanguageSelect';
import ProfileMenu from './ProfileMenu';

interface TopbarProps {
  isClosing: boolean;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Topbar = ({ isClosing, mobileOpen, setMobileOpen }: TopbarProps) => {
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px={3.5}
      height={90}
      bgcolor="info.lighter"
      position="sticky"
      top={0}
      zIndex={1200}
    >
      {/* Left Section */}
      <Box display="flex" alignItems="center" minWidth="150px">
        <ButtonBase
          component={Link}
          href="/"
          disableRipple
          sx={{ lineHeight: 0, display: { xs: 'none', sm: 'block', lg: 'none' } }}
        >
          <Image src={LogoImg} alt="logo" height={500} width={500} />
        </ButtonBase>

        <Toolbar sx={{ display: { xs: 'block', lg: 'none' }, ml: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <IconifyIcon icon="clarity:menu-line" />
          </IconButton>
        </Toolbar>
      </Box>

      {/* Center Section (Search) */}
      <Box flex={1} display="flex" justifyContent="center">
        <TextField
          variant="filled"
          placeholder="Search Guide"
          sx={{ width: 350, display: { xs: 'none', md: 'flex' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconifyIcon icon={'mynaui:search'} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Right Section */}
      <Box display="flex" alignItems="center" gap={2}>
        <LanguageSelect />
        <IconButton size="large">
          <Badge color="error" variant="dot">
            <IconifyIcon icon="solar:bell-outline" />
          </Badge>
        </IconButton>
        <ProfileMenu />
      </Box>
    </Stack>
  );
};

export default Topbar;
