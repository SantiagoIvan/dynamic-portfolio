import { Button } from "@/components/ui/button";

export default function Contact(){
    return (
        <section
            id="contact"
            className="w-full py-8 px-4 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-3xl text-center space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    ¿Hablamos?
                </h2>

                <p className="text-muted-foreground text-base sm:text-lg">
                    Si tenés un proyecto, una idea o simplemente querés contactarme,
                    escribime sin compromiso.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <div className="flex flex-col items-center gap-3">
                        <Button size="lg" asChild className="transition-colors hover:bg-primary/50 border-2">
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=santiago@email.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contactarme
                            </a>
                        </Button>

                        <a
                            href="mailto:santiago@email.com"
                            className="text-sm text-muted-foreground hover:underline"
                        >
                            Abrir con mi cliente de correo
                        </a>
                    </div>

                    <Button
                        size="lg"
                        variant="outline"
                        asChild
                    >
                        <a
                            href="https://www.linkedin.com/in/santiago-iv%C3%A1n-feijoo-b6b72b1a4/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}