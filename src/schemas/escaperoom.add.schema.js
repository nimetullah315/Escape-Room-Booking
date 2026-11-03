import z from "zod";

// id, name, description, difficulty, duration, maxPlayers

export const createEscapeRoomSchema = z.object({
  body: z.object({
    name: z.string({ error: "Name ma vare en string" }),
    description: z.string({ error: "Description ma vare en string" }),
    difficulty: z
      .number()
      .int({ error: "difficulty ma vare en integer" })
      .min(1, "difficulty ma vare minist 1")
      .max(5, "difficulty ma vare maksimalt 5"),
    duration: z
      .number()
      .int({ error: "duration ma vare en integer" })
      .positive("duration ma storre enn 0"),
    maxPlayers: z
      .number()
      .int({ error: "maxPlayers ma vare en integer" })
      .positive("maxPlayers ma storre enn 0"),
  }),
});
