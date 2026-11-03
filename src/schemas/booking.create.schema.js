import z from "zod";

export const createBookingSchema = z.object({
  body: z.object({
    roomId: z.number().int({
      error: "roomId ma vare en integer",
    }),

    customerName: z.string({
      error: "customerName ma vare en string",
    }),

    bookingDate: z.coerce.date({
      error: "bookingDate ma vare en Date",
    }),

    numberOfPlayers: z
      .number()
      .int({ error: "numberOfPlayers ma vare en integer" })
      .positive("numberOfPlayers ma storre enn 0"),
  }),
});
