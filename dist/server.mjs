import {
  registerForEvent
} from "./chunk-26H4RBMS.mjs";
import {
  errorHandler
} from "./chunk-UGBB2UCF.mjs";
import {
  CheckIn
} from "./chunk-67MKAAJF.mjs";
import {
  createEvent
} from "./chunk-ZDVSVSBV.mjs";
import "./chunk-U5RXYY2H.mjs";
import {
  getAttendeeBadge
} from "./chunk-B754VCXQ.mjs";
import {
  getEventAttendees
} from "./chunk-7M6FJWCJ.mjs";
import {
  getEvent
} from "./chunk-DFY3CYAE.mjs";
import "./chunk-32HA26QH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import dotenv from "dotenv";
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
dotenv.config();
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "NLW Unite API - Pass In",
      description: "API para gerenciamento de eventos e inscri\xE7\xF5es",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(CheckIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running! \u{1F680}");
});
