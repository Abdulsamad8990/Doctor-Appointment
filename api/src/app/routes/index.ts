import express from 'express';

import { AuthRouter } from '../modules/auth/auth.route';
import { PatientRouter } from '../modules/patient/patient.route';
import { DoctorRouter } from '../modules/doctor/doctor.route';
import { ReviewRouter } from '../modules/reviews/reviews.route';
import { AppointmentRouter } from '../modules/appointment/appointment.route';
import { PrescriptionRouter } from '../modules/prescription/prescription.route';

const router = express.Router();

const moduleRoutes = [
    {
        path: '/doctor',
        route: DoctorRouter,
    },
    {
        path: '/review',
        route: ReviewRouter,
    },
    {
        path: '/auth',
        route: AuthRouter,
    },
    {
        path: '/patient',
        route: PatientRouter,
    },
    {
        path: '/appointment',
        route: AppointmentRouter,
    },
    {
        path: '/prescription',
        route: PrescriptionRouter,
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
