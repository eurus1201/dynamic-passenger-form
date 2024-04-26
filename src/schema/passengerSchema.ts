import { z } from "zod";

const MAX_STRING_LENGTH = 50;
const MIN__LENGTH = 1;

const EMPTY_FIELD_MESSAGE = "Field cannot be empty";

const PassengerSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: EMPTY_FIELD_MESSAGE })
    .max(MAX_STRING_LENGTH, {
      message: `You can add at most ${MAX_STRING_LENGTH} characters`,
    })
    .refine(
      (value) => /^[آ-ی]+$/.test(value),
      "Name should contain only alphabets"
    )
    .refine((value) => !!value.trim(), {
      message: EMPTY_FIELD_MESSAGE,
    }),
  lastName: z
    .string()
    .min(2, { message: EMPTY_FIELD_MESSAGE })
    .max(MAX_STRING_LENGTH, {
      message: `You can add at most ${MAX_STRING_LENGTH} characters`,
    })
    .refine(
      (value) => /^[آ-ی]+$/.test(value),
      "Name should contain only alphabets"
    )
    .refine((value) => !!value.trim(), {
      message: EMPTY_FIELD_MESSAGE,
    }),
  gender: z
    .string()
    .min(1)
    .refine((value) => !!value.trim(), {
      message: EMPTY_FIELD_MESSAGE,
    }),
  nationalCode: z
    .string()
    .length(10)
    .refine((value) => !!value.trim(), {
      message: EMPTY_FIELD_MESSAGE,
    }),
    birthDay: z.object({
      day: z
        .string()
        .min(1)
        .refine((value) => !!value.trim(), {
          message: EMPTY_FIELD_MESSAGE,
        }),
      month: z
        .string()
        .min(1)
        .refine((value) => !!value.trim(), {
          message: EMPTY_FIELD_MESSAGE,
        }),
      year: z
        .string()
        .min(1)
        .refine((value) => !!value.trim(), {
          message: EMPTY_FIELD_MESSAGE,
        }),
    }),
});

const PassengersSchema = z.object({
  passengers: z
    .array(PassengerSchema)
    .min(MIN__LENGTH, {
      message: `You need to add at least ${MIN__LENGTH} passenger`,
    })
    .max(5, {
      message: `You can add at most ${5} passenger`,
    }),
});

export default PassengersSchema;
