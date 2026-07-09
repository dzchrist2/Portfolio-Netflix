import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import './Experience.css';
import { usePageTitle } from '../../hooks/usePageTitle';
import { experience as experienceArray } from '../../data/experience';



const Experience: React.FC = () => {
    usePageTitle('Experience');
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <>
        <div className="timeline-container">
            <h2 className="timeline-title">Work Experience & Education</h2>
        </div>
            <div className="timelineContainer">
            <Timeline position={isMobile ? 'right' : 'alternate'}>
                {experienceArray.map((item) => (
                <TimelineItem key={item.name}>
                    {!isMobile && (
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body1"
                            color="#e50914"
                            >
                            {item.dateRange}
                        </TimelineOppositeContent>
                    )}
                    <TimelineSeparator>
                    <TimelineDot color={item.timelineType === "work" ? 'error' : 'primary'}>
                        {item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {isMobile && (
                            <Typography variant="body2" color="#e50914">
                                {item.dateRange}
                            </Typography>
                        )}
                        <Typography variant="h6" component="span">
                            {item.name}
                        </Typography>
                        <Typography variant="body1">
                            {item.title}
                        </Typography>
                        {item.summaryPoints.map(point =>
                            <Typography key={point}>
                                {point}
                            </Typography>
                        )}
                    </TimelineContent>
                </TimelineItem>
                ))}
                </Timeline>
            </div>
        </>
    );
};

export default Experience;
