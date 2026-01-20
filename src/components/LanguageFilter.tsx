import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface Props {
    languages: string[];
    selected: string | undefined;
    onSelect: (lang: string ) => void;
}

export function LanguageFilter({ languages, selected, onSelect }: Props) {
    return (
        <Select value={selected} onValueChange={onSelect}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Filtrar por lenguaje" />
            </SelectTrigger>

            <SelectContent>
                <SelectItem value="all">Todos</SelectItem>

                {languages.map((language) => (
                    <SelectItem key={language} value={language}>
                        {language}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
