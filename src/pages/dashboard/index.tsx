import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import Activity from 'components/sections/dashboard/activity';
import TaskToday from 'components/sections/dashboard/task-today';
// import RunningTask from 'components/sections/dashboard/running-task';
import UpcomingTask from 'components/sections/dashboard/upcoming-task';
import WeekCalendar from 'components/sections/dashboard/week-calendar';
import TaskOverview from 'components/sections/dashboard/task-overview';
import MonthlyMentors from 'components/sections/dashboard/monthly-mentors';
import Footer from 'components/common/Footer';

const Dashboard = () => {
  return (
    <Box sx={{ width: '80vw', minHeight: '100vh', overflowX: 'hidden' }}>
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{
        width: '100%',
      }}
    >
      {/* Main Section */}
      <Stack
        p={3.5}
        
        spacing={3.5}
        direction="column"
        width={{ xs: '100%', md: '100%' }}
        boxSizing="border-box"
      >
        <Stack
          width="100%"
          spacing={3.5}
          direction={{ xs: 'column', sm: 'row', md: 'column', xl: 'row' }}
          flexWrap="wrap"
        >
          {/* <RunningTask /> */}
          {/* <Activity /> */}
        </Stack>

        <MonthlyMentors />
        <UpcomingTask />
        <TaskOverview />

        {/* Desktop Footer */}
        <Box display={{ xs: 'none', md: 'block' }}>
          <Footer />
        </Box>
      </Stack>

      {/* Sidebar */}
      <Box
        width={{ xs: '100%', md: 460 }}
        height={{ xs: 'auto', md: 'calc(100dvh - 90px)' }}
        overflow="auto"
        bgcolor="info.main"
        position={{ xs: 'relative', md: 'sticky' }}
        top={90}
        sx={{
          '&::-webkit-scrollbar-thumb': {
            visibility: 'hidden',
          },
          '&:hover, &:focus': {
            '&::-webkit-scrollbar-thumb': {
              visibility: 'visible',
            },
          },
        }}
      >
        <Stack p={3.5} spacing={3.5} width="100%" direction="column">
          <WeekCalendar />
          <TaskToday />
        </Stack>

        {/* Mobile Footer */}
        <Box display={{ xs: 'block', md: 'none' }}>
          <Footer />
        </Box>
      </Box>
    </Stack>
    </Box>
  );
};

export default Dashboard;
