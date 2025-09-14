"use client";
import type { ThemeProviderProps } from "next-themes";
import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import NextTopLoader from "nextjs-toploader";
import { ToastProvider } from "@heroui/toast";
import { Suspense } from "react";
import { PersistedQueryClientProvider } from "@/core/providers";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <Suspense fallback={<NextTopLoader color="#0466c8" />}>
      <PersistedQueryClientProvider>
        <HeroUIProvider
          className="light"
          navigate={router.push}
          style={{
            colorScheme: "light",
          }}
        >
          <NextTopLoader color="#0466c8" />

          <ToastProvider
            placement="top-center"
            toastOffset={10}
            regionProps={{
              className: "z-999999999999!",
              classNames: {
                base: "z-999999999999!",
              },
            }}
          />

          {children}
        </HeroUIProvider>
      </PersistedQueryClientProvider>
    </Suspense>
  );
}
