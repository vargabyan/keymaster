import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Proximity from "./image/Proximity-Key-scaled.jpg";
import Car from "./image/Car-Key-Shells-scaled.jpg";
import Container from '@mui/material/Container';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "car key",
    imgUrl: Car,
  },
  {
    label: "start stop",
    imgUrl: Proximity,
  },
];

function HeaderPoster() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth="lg" sx={{marginTop: "80px"}}>
        <Box sx={{ flexGrow: 1 }}>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            interval={6000}
        >
            {images.map((step, index) => (
            <div key={step.label} style={{height: "400px", overflow: "hidden",}}>
                {Math.abs(activeStep - index) <= 2 ? (
                <Box
                    component="img"
                    sx={{
                      display: 'block',
                      overflow: 'hidden',
                      width: '100%',
                      marginTop: "-180px" 
                    }}
                    src={step.imgUrl}
                    alt={step.label}
                    key={step.label}
                />
                ) : null}
            </div>
            ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
                data-testid="next"
            >
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
              <Button 
                size="small" 
                onClick={handleBack} 
                disabled={activeStep === 0}
                data-testid="back"
              >
                  {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                  ) : (
                  <KeyboardArrowLeft />
                  )}
              </Button>
            }
        />
        </Box>
    </Container>
  );
}

export default HeaderPoster;