/**
 * Traduccion automatica ES -> EN para contenido dinamico (ej. descripciones de
 * repos de GitHub) que no podemos traducir a mano porque cambia con el tiempo.
 *
 * Usa MyMemory (https://mymemory.translated.net/), una API gratuita sin API key.
 * Tiene un limite de uso diario razonable para un portfolio personal, pero no
 * esta pensada para trafico alto. Si en el futuro hace falta mas volumen o
 * mejor calidad, conviene migrar a un servicio pago (DeepL, Google Cloud
 * Translation, etc.) usando esta misma funcion como punto de entrada.
 *
 * Si la traduccion falla (rate limit, servicio caido, etc.) devolvemos el
 * texto original en vez de romper la pagina.
 */
export async function translateEsToEn(text: string | null): Promise<string | null> {
    if (!text || !text.trim()) return text;

    try {
        const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|en`,
            {
                next: {
                    revalidate: 3600, // 1 hora, igual que el resto de los datos de GitHub
                },
            }
        );

        if (!res.ok) {
            return text;
        }

        const data = await res.json();
        const translated = data?.responseData?.translatedText;

        return typeof translated === "string" && translated.trim() ? translated : text;
    } catch (error) {
        console.error("Error traduciendo texto", error);
        return text;
    }
}
