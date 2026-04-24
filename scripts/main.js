import { showNavigation } from './navigation.js';
showNavigation()

// DISPLAY PACKAGE CARDS
import { packages } from '../data/packages.mjs';
import { displayPackages } from './packages.js';
displayPackages(packages)

// DISPLAY TESTIMONIAL CARDS
import { getTestimonialData } from './testimonials.js';
getTestimonialData()

// DISPLAY SERVICE CARDS
import { getServiceData } from './services.js';
getServiceData()

// DISPLAY JOBS
import { getJobsData } from './jobs2.js';
getJobsData()

// DISPLAY THANKYOU PAGE
import { displayFormData } from './thankyou.js';
displayFormData()