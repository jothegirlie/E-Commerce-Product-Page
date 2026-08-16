import { createServer, Model } from "miragejs";
import products from "../data/products";

export function makeServer() {
  return createServer({
    models: {
      product: Model,
    },

    seeds(server) {
      products.forEach((product) => {
        server.create("product", product);
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/products", (schema) => {
        return schema.products.all();
      });

      this.get("/products/:id", (schema, request) => {
        return schema.products.find(request.params.id);
      });
    },
  });
}