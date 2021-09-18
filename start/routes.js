"use strict";

const Route = use("Route");

Route.any("*", ({ view }) => view.render("welcome"));
