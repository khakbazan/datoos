"use client";
import NextTopLoader from "nextjs-toploader";
import { createIDBPersister, getQueryClient } from "../config";
import { usePersistQueryClient } from "../hooks/usePersistQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

interface ProvidersProps {
  children: React.ReactNode;
}

export function PersistedQueryClientProvider({ children }: ProvidersProps) {
  const queryClient = getQueryClient();

  const { isRestored } = usePersistQueryClient({
    queryClient,
    persister: createIDBPersister(),
    maxAge: 24 * 60 * 60 * 1000,
  });

  if (!isRestored) {
    return <NextTopLoader color="#0466c8" />;
  }

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
