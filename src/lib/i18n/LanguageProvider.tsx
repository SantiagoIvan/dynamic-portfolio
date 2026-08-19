"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { Locale, translations } from "./translations";

interface LanguageContextValue {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function resolveKey(locale: Locale, key: string): string {
    const parts = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[locale];

    for (const part of parts) {
        value = value?.[part];
    }

    return typeof value === "string" ? value : key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>("es");

    const value = useMemo<LanguageContextValue>(
        () => ({
            locale,
            setLocale,
            t: (key: string) => resolveKey(locale, key),
        }),
        [locale]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
    }
    return ctx;
}

/**
 * Componente chico para traducir texto estatico dentro de Server Components,
 * sin tener que convertir a todo el componente padre en "use client".
 */
export function T({ k }: { k: string }) {
    const { t } = useLanguage();
    return <>{t(k)}</>;
}
