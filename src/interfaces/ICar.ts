import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'DoorsQty is required',
    invalid_type_error: 'DoorsQty must be a number',
  }).int({ message: 'DoorsQty must be an integer' })
    .gte(2, { message: 'DoorsQty must be greater than 2' })
    .lte(4, { message: 'DoorsQty must be lesser than 4' }),

  seatsQty: z.number({
    required_error: 'SeatsQty is required',
    invalid_type_error: 'SeatsQty must be a number',
  }).int({ message: 'SeatsQty must be an integer' })
    .gte(2, { message: 'SeatsQty must be greater than 2' })
    .lte(7, { message: 'SeatsQty must be lesser than 7' }),
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar, CarZodSchema };
