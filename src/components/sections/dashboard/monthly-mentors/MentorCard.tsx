import './MentorCard.css'; // <-- Make sure this file exists in the same folder

import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
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

const MentorCard = ({ data }: MentorCardProps) => {
  return (
    <div className="card-rotator">
      <div className="card-rotator-inner">
        {/* FRONT SIDE */}
        <div className="card-rotator-front">
          <Card sx={{ userSelect: 'none' }}>
            <Stack alignItems="center" justifyContent="space-between">
              <Stack alignItems="center" spacing={1} justifyContent={"center"}>
                <Avatar
                  src={data.avatar}
                  component={Link}
                  href="#!"
                  sx={{ height: 48, width: 48, bgcolor: 'primary.main' }}
                />
                <CardContent>
                  <Typography
                    component={Link}
                    href="#!"
                    variant="subtitle1"
                    color="text.primary"
                    fontWeight={600}
                  >
                    {data.Last_name} {data.First_name}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {data.Major}
                  </Typography>
                </CardContent>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={0.875}>
                  <IconifyIcon icon="hugeicons:person" color="text.secondary" fontSize="h4.fontSize" />
                  <Typography color="text.primary" fontSize="body2.fontSize" fontWeight={600}>
                    {data.Mentees} Mentees
                  </Typography>
                </Stack>
              <CardActions disableSpacing>
                <Button
                  variant="text"
                  size="medium"
                  sx={{
                    color: data.Request ? 'text.secondary' : 'primary.main',
                    '& .MuiButton-startIcon': { mr: 0, pointerEvents: 'none' },
                  }}
                  startIcon={data.Request ? '' : <IconifyIcon icon="gridicons:plus-small" />}
                  fullWidth
                >
                  {data.Request ? 'Requested' : 'Send Request'}
                </Button>
              </CardActions>
            </Stack>
          </Card>
        </div>

        {/* BACK SIDE */}
        <div className="card-rotator-back">
          <Card sx={{ userSelect: 'none' }}>
            <CardContent sx={{ mt: 2.75 }}>
              <Stack alignItems="center" justifyContent="space-between" spacing={2}>
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
    </div>
  );
};

export default MentorCard;
