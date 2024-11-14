import * as React from 'react';
import Timeline from "@mui/lab/Timeline";

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


export default function Journey() {
  return (
    <div className='my-8'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-gray-900 font-semibold text-xl my-3'>How Development</h1>
            <h1 className='text-black font-bold text-lg md:text-xl lg:text-2xl'>Through Alcaline works</h1>

        </div>

    <Timeline position="alternate">
      <TimelineItem data-aos='zoom-in' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Assemble the right team
          </Typography>
          <Typography className='text-gray-700'>

Assembling the right team involves selecting individuals with complementary skills who communicate effectively, fostering collaboration and innovation throughout the development process.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='fade-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Sprint planning
          </Typography>
          <Typography className='text-gray-700'>

Sprint planning is a collaborative meeting where the team defines the scope of work for the upcoming sprint, prioritizing tasks and setting achievable goals to ensure a focused and productive development cycle.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='flip-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Tech architecture
          </Typography>
          <Typography className='text-gray-700'>Tech architecture outlines the foundational framework of a system, detailing the components, technologies, and relationships that enable scalability, performance, and security throughout the development process.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='zoom-in-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Stand ups and weekly demos
          </Typography>
          <Typography className='text-gray-700'>

Standups foster daily communication among team members, ensuring alignment and addressing any roadblocks. Weekly demos showcase progress and gather feedback, promoting transparency and collaboration.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-up"
     data-aos-duration="3000">
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Code Review
          </Typography>
          <Typography className='text-gray-700'>

Code reviews involve team members assessing each other’s code to ensure quality, functionality, and adherence to standards. This collaborative process enhances code reliability, fosters knowledge sharing, and improves overall project performance.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> 
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Iterative Delivery
          </Typography>
          <Typography className='text-gray-700'>

Iterative delivery focuses on breaking the development process into smaller, manageable cycles. Each iteration results in a potentially shippable product increment, allowing for continuous feedback and improvements. This approach enhances adaptability, enabling teams to refine features based on user input and changing requirements, ultimately leading to a more successful end product.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}
