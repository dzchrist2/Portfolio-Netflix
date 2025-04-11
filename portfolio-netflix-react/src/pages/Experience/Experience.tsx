import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import './Experience.css';



const Experience: React.FC = () => {

    const experienceArray = [
        {
            name: "Cast Member Intern",
            title: "Disney College Program",
            timelineType: "work",
            dateRange: "May 2025 - Present",
            summaryPoints: [""],
            techStack: "TechStack"
        },
        {
            name: "Barrett Honors College at Arizona State University",
            title: "BS Computer Science",
            timelineType: "school",
            dateRange: "August 2020 - May 2024",
            summaryPoints: ["GPA: 3.59 - Cum Laude", 
                "Honors Thesis: “Lettuce Nutritional Deficiency and Disease Identification with ResNet-50 and CapsNet”",
                "Informatics Certificate, President's Award Scholarship, 4 years Dean’s List, “Engineering Projects in Community Service”"],
            techStack: "TechStack"
        },
        {
            name: "Capsule Network Research with Dr. Lynn Carter",
            title: "Barrett Honors College",
            timelineType: "work",
            dateRange: "August 2023- May 2024",
            summaryPoints: ["Implemented experimental machine learning network architecture, Capsule Network, using Python.", 
                "Adapted architecture from the article “Dynamic Routing between Capsules” to generalize to a wider range of datasets.",
                "Researched mathematical foundations and programming concepts behind capsule theory and applied it to a real world problem"],
            techStack: "TechStack"
        },
        {
            name: "Machine Learning Engineer",
            title: "Astro Seed",
            timelineType: "work",
            dateRange: "August 2023 - May 2024",
            summaryPoints: ["Designed, implemented, and tested a machine learning model to identify health defects in crops from images utilizing a deep convolutional neural network in Python.", 
                "Achieved 98.5% classification accuracy for nutritional deficiencies and diseases.",
                "Developed a remote data pipeline for easy access to large datasets of images of crops.",
                "Optimized algorithmic performance by experimenting with data preprocessing and augmentation.",
                "Managed project timeline team collaboration through scrum agile project management framework.",
                "Presented product at a showcase event, earning 2nd place out of 150 other products."],
            techStack: "TechStack"
        },
        {
            name: "Global Tech Experience: Web Development Bootcamp",
            title: "Web Development Certifications",
            timelineType: "school",
            dateRange: "May 2023 - August 2023",
            summaryPoints: ["GPA: 4.0", 
                "Certifications: “HTML & CSS Specialist,” “JavaScript Specialist,” “Intercultural Skills.”"],
            techStack: "TechStack"
        },
        {
            name: "Electrical Impedance Tomography Research with Dr. Malena Espanol",
            title: "Barrett Honors College",
            timelineType: "work",
            dateRange: "July 2022 - May 2023",
            summaryPoints: ["Created a linear algebra algorithm to convert matrices of electrical input data into images that can be used to visualize internal structure of a body which provides important insights for healthcare providers.", 
                "Designed and constructed a prototype EIT device using Arduino which obtains electrical data from the human body to analyze internal health abnormalities.",
                "Improved existing EIT algorithms to increase precision and accuracy allowing them to function with less available data."],
            techStack: "TechStack"
        },
        {
            name: "Shift Leader",
            title: "Tropical Smoothie Cafe",
            timelineType: "work",
            dateRange: "June 2024 - April 2025",
            summaryPoints: ["Manage a team to ensure tasks are completed efficiently, quickly, and with proper quality.", 
                "Maintain high standards of cleanliness and customer satisfaction throughout consistently busy business hours.",
                "Ensure strong team morale which simultaneously upholding requirements of customers and management."],
            techStack: "TechStack"
        }
    ]
    return (
        <>
        <div className="timeline-container">
            <h2 className="timeline-title">Work Experience & Education</h2>
        </div>
            <div className="timelineContainer">
            <Timeline position="alternate">
                {experienceArray.map((item) => (
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body1"
                        color="#e50914"
                        >
                        {item.dateRange}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot color={item.timelineType === "work" ? 'error' : 'primary'}>
                        {item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6" component="span">
                            {item.name} 
                        </Typography>
                        <Typography variant="body1">
                            {item.title}
                        </Typography>
                        {item.summaryPoints.map(point => 
                            <Typography>
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
