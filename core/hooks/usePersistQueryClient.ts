"use client";
import { useEffect, useState } from "react";
import {
  persistQueryClient,
  PersistQueryClientOptions,
} from "@tanstack/react-query-persist-client";

interface PersistQueryClientResult {
  isRestored: boolean;
  error: Error | null;
}

export function usePersistQueryClient(
  options: PersistQueryClientOptions
): PersistQueryClientResult {
  const { queryClient, persister, maxAge } = options;
  const [isRestored, setIsRestored] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const [, restorePromise] = persistQueryClient({
      queryClient,
      persister,
      maxAge,
    });

    restorePromise
      .then(() => {
        if (isMounted) {
          setIsRestored(true);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(
            err instanceof Error ? err : new Error("Cache restoration failed")
          );
          setIsRestored(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [queryClient, persister, maxAge]);

  return { isRestored, error };
}
