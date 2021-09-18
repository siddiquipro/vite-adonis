"use strict";

const Route = use("Route");

Route.any("*", ({ view, request }) => view.render("welcome", { p: request.input("path", "/") }));
