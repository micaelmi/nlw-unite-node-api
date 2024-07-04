import {
  BadRequest
} from "./chunk-32HA26QH.mjs";
import {
  prisma
} from "./chunk-JV6GRE7Y.mjs";

// src/routes/get-event.ts
import z from "zod";
async function getEvent(app) {
  app.withTypeProvider().get(
    "/events/:eventId",
    {
      schema: {
        summary: "Get an event",
        tags: ["events"],
        params: z.object({
          eventId: z.string().uuid()
        }),
        response: {
          200: z.object({
            event: z.object({
              id: z.string().uuid(),
              title: z.string(),
              details: z.string().nullable(),
              maximumAttendees: z.number().int().nullable(),
              slug: z.string(),
              attendeesAmount: z.number(),
              isFull: z.boolean()
            })
          })
        }
      }
    },
    async (request, reply) => {
      const { eventId } = request.params;
      const event = await prisma.event.findUnique({
        select: {
          id: true,
          title: true,
          details: true,
          maximumAttendees: true,
          slug: true,
          _count: {
            select: {
              attendees: true
            }
          }
        },
        where: { id: eventId }
      });
      if (event === null) throw new BadRequest("Event not found");
      return reply.send({
        event: {
          id: event.id,
          title: event.title,
          details: event.details,
          maximumAttendees: event.maximumAttendees,
          slug: event.slug,
          attendeesAmount: event._count.attendees,
          isFull: event.maximumAttendees && event.maximumAttendees === event._count.attendees ? true : false
        }
      });
    }
  );
}

export {
  getEvent
};
