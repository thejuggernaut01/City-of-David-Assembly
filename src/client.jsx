import { createClient } from "@sanity/client";

export default createClient({
  projectId: "st016v9f",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-07-01",
});
