import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Quote, ArrowLeft } from "lucide-react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/insightclinica.png";

export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Pacientes — Insight Clínica" },
      {
        name: "description",
        content: "Depoimentos de pacientes atendidos pela Insight Clínica.",
      },
      { property: "og:title", content: "Pacientes — Insight Clínica" },
      {
        property: "og:description",
        content: "O que dizem sobre o atendimento da Insight Clínica.",
      },
    ],
  }),
  component: Pacientes,
});

const testimonials = [
  {
    q: "A equipe da Insight Clínica nos ajudou a atravessar um momento difícil com muita escuta, cuidado e profissionalismo. Saímos mais fortalecidos emocionalmente.",
    a: "Marcos Souza",
    r: "Paciente · Vale do Aço",
  },
  {
    q: "O acompanhamento psicológico fez toda a diferença para nossa família. Cada sessão foi um espaço seguro de diálogo e acolhimento.",
    a: "Ana Costa Assis",
    r: "Paciente · Ipatinga",
  },
  {
    q: "O atendimento é extremamente profissional e humano. Recomendo a qualquer pessoa que esteja buscando apoio psicológico sério e responsável.",
    a: "Carlos Augusto Pereira",
    r: "Paciente· Coronel Fabriciano",
  },
  {
    q: "O atendimento foi acolhedor desde o primeiro contato. Me senti ouvido e respeitado em todo o processo, o que fez muita diferença na minha evolução emocional.",
    a: "Marcia Loureiro",
    r: "Paciente· Estados Unidos",
  },
  {
    q: "Encontrei um espaço seguro para falar sobre questões que vinha guardando há anos. A escuta foi atenta e sem julgamentos, algo essencial para mim.",
    a: "Sara Medeiros",
    r: "Paciente· Portugal",
  },
  {
    q: "O acompanhamento foi muito profissional e ao mesmo tempo humano. Me ajudou a organizar pensamentos e lidar melhor com a ansiedade do dia a dia.",
    a: "Guilherme Andrade",
    r: "Paciente· Santa Catarina",
  },
];

function Pacientes() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 w-full overflow-x-hidden">
      {/* Barra superior de ações (Voltar + Logo) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 dark:border-zinc-900 pb-6">
          {/* Botão Voltar para Tela Inicial */}
          <Link
            to=".."
            className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors py-2 sm:py-0"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Voltar para o início
          </Link>

          {/* Logo fixa colorida */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center sm:justify-start"
          >
            {/* <img
              src={logoImg}
              alt="Insight Clínica Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 dark:brightness-110 dark:contrast-105"
            /> */}
          </motion.div>
        </div>
      </div>

      <PageHeader
        eyebrow="— 04 / Pacientes"
        title="O que dizem sobre a atuação da Insight Clínica."
        intro="Pacientes, famílias e instituições que confiaram seus processos de cuidado à equipe de psicólogos da Insight Clínica."
      />

      <section className="bg-zinc-50 dark:bg-zinc-900/40 py-12 sm:py-16 lg:py-28 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-px bg-zinc-200 dark:bg-zinc-800 md:grid-cols-3 rounded-sm overflow-hidden">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.a}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col justify-between bg-white dark:bg-zinc-900 p-6 sm:p-8 lg:p-10 transition-colors duration-300 min-w-0"
              >
                <div>
                  {/* Ícone de aspas usando a cor terracota/laranja consistente com a Home */}
                  <Quote
                    className="h-8 w-8 text-orange-700 dark:text-orange-500 shrink-0"
                    strokeWidth={1.2}
                  />

                  <blockquote className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 wrap-break-word">
                    "{t.q}"
                  </blockquote>
                </div>

                <figcaption className="mt-8 sm:mt-10 border-t border-zinc-100 dark:border-zinc-800 pt-5">
                  <div className="font-heading text-base font-medium text-zinc-900 dark:text-zinc-50 truncate">
                    {t.a}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 wrap-break-word">
                    {t.r}
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
