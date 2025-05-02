import './MentorCard.css'; // <-- Make sure this file exists in the same folder

import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconifyIcon from 'components/base/IconifyIcon';
import { Mentor } from 'data/mentors';

interface MentorCardProps {
  data: Mentor;
}

const request = false;

const MentorCard = ({ data }: MentorCardProps) => {
  return (
    <div style={{ display: 'inline-block'}}>
      <div className="card-rotator">
        <div className="card-rotator-inner">
          {/* FRONT SIDE */}
          <div className="card-rotator-front">
            <Card sx={{ userSelect: 'none' }}>
              <Stack alignItems="center">
                <Stack alignItems="center" spacing={2} justifyContent={"center"}>
                  <Avatar
                    src={data.avatar}
                    component={Link}
                    href="#!"
                    sx={{ height: 48, width: 48, bgcolor: 'primary.main' }}
                  />
                  <CardContent >
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                      <Typography 
                        component={Link}
                        href="#!"
                        variant="subtitle1"
                        color="text.primary"
                        fontWeight={600}
                      >
                        {data.Last_name}  {data.First_name}
                      </Typography>
                      <Typography variant="subtitle2" color="text.secondary" mb={1}> 
                        {data.Major} {data.Academic_year}
                      </Typography>
                    </Box>
                  </CardContent>
                </Stack>
                <Stack spacing={2} direction="row" alignItems="center">
                  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                      <IconifyIcon icon="hugeicons:person" color="text.secondary" fontSize="h4.fontSize" />
                      <Typography color="text.primary" fontSize="body2.fontSize" fontWeight={600}>
                        {data.Mentees} Mentees
                      </Typography>
                  </Box>
                </Stack> 
              </Stack>
            </Card>
          </div>

          {/* BACK SIDE */}
          <div className="card-rotator-back">
            <Card sx={{ userSelect: 'none' }}>
              <CardContent sx={{ mt: 2.75 }}>
                <Stack alignItems="center" spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={0.5}>
                    <IconifyIcon
                      icon="material-symbols:star-rate-rounded"
                      color="warning.main"
                      fontSize="h4.fontSize"
                    />
                    <Typography color="text.primary" fontSize="body2.fontSize" fontWeight={600}>
                      {data.Bio}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </div>
        </div>
      </div >
      <CardActions disableSpacing sx={{ mt: 2, backgroundColor: "#ffffff" }}>
        <Button
          variant="text"
          size="medium"
          sx={{
            color: request ? 'text.secondary' : '#ff6517',
            '& .MuiButton-startIcon': { pointerEvents: 'none' },
          }}
          startIcon={request ? '' : <IconifyIcon icon="gridicons:plus-small" />}
          fullWidth
        >
          {request ? 'Requested' : 'Send Request'}
        </Button>
      </CardActions>
  </div>
  );
};

export default MentorCard;
