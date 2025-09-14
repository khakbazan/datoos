"use client";
import { clientRequest } from "@/core/config";
import { useQuery } from "@tanstack/react-query";

export const FakeQuery = () => {
  const { data } = useQuery({
    queryKey: ["itsFakeQuery"],
    queryFn: async () => {
      const url = "todos/1";

      const response = await clientRequest.get(url, {
        baseURL: "https://jsonplaceholder.typicode.com",
      });

      return response.data;
    },
  });

  console.log(data);
  return <div>FakeQuery</div>;
};
