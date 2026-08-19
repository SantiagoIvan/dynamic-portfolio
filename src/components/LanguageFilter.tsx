import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface Props {
    languages: string[];
    selected: string | undefined;
    onSelect: (lang: string ) => void;
    placeholder?: string;
    allLabel?: string;
    starredLabel?: string;
}

export function LanguageFilter({
    languages,
    selected,
    onSelect,
    placeholder = "Filtrar por lenguaje",
    allLabel = "Todos",
    starredLabel = "Destacados",
}: Props) {
    return (
        <Select value={selected} onValueChange={onSelect}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="all">{allLabel}</SelectItem>
                <SelectItem value="starred">{starredLabel}</SelectItem>
                {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                        {language}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
