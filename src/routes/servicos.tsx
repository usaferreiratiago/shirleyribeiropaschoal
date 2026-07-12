import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Users,
  MessageCircle,
  ShieldCheck,
  ClipboardList,
  ArrowLeft,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/insightclinica.png";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Serviços — Insight Clínica" },
      {
        name: "description",
        content:
          "Conheça os serviços de psicologia oferecidos pela Insight Clínica para adolescentes, adultos, casais e famílias.",
      },
      {
        property: "og:title",
        content: "Serviços de Psicologia — Insight Clínica",
      },
      {
        property: "og:description",
        content:
          "Atendimento psicológico humanizado com foco no bem-estar, saúde mental e qualidade de vida.",
      },
    ],
  }),
  component: Servicos,
});

const services = [
  {
    icon: Brain,
    title: "Avaliação psicológica",
    desc: "Processo inicial de escuta e compreensão das demandas emocionais, comportamentais e cognitivas do paciente.",
  },
  {
    icon: Heart,
    title: "Psicoterapia individual",
    desc: "Atendimento clínico focado no autoconhecimento, regulação emocional e desenvolvimento pessoal.",
  },
  {
    icon: Users,
    title: "Terapia familiar",
    desc: "Acompanhamento de famílias para melhorar comunicação, vínculos e resolução de conflitos.",
  },
  {
    icon: MessageCircle,
    title: "Aconselhamento psicológico",
    desc: "Suporte breve para momentos de crise, decisões difíceis e orientação emocional.",
  },
  {
    icon: ShieldCheck,
    title: "Saúde mental preventiva",
    desc: "Estratégias de cuidado e prevenção para reduzir riscos de sofrimento psíquico e promover bem-estar.",
  },
  {
    icon: ClipboardList,
    title: "Acompanhamento terapêutico",
    desc: "Planejamento e monitoramento contínuo do processo terapêutico com foco em evolução clínica.",
  },
];

function Servicos() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 w-full overflow-x-hidden">
      {/* Barra superior de ações (Voltar + Logo) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-zinc-100 dark:border-zinc-900 pb-6">
          {/* Botão Voltar para Tela Inicial */}
          <Link
            to="/"
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
        eyebrow="— 02 / Serviços"
        title="Do acolhimento ao cuidado contínuo."
        intro="Atendimento psicológico integrado. Você fala com uma equipe de psicólogos, desde o primeiro contato até o acompanhamento terapêutico contínuo."
      />

      {/* Seção de serviços adaptável para Light e Dark Mode */}
      <section className="bg-zinc-50 dark:bg-zinc-900/40 py-12 sm:py-20 text-zinc-900 dark:text-zinc-50 lg:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Grid estruturado com cores de borda perfeitamente legíveis em ambos os modos */}
          <div className="grid grid-cols-1 gap-px overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-800 md:grid-cols-2 lg:grid-cols-3 rounded-sm">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative bg-white dark:bg-zinc-900 p-6 sm:p-8 transition-all duration-300 hover:shadow-md dark:hover:shadow-zinc-950/50 hover:z-10 lg:p-10 flex flex-col justify-between"
              >
                <div>
                  {/* Ícone com destaque laranja/terracota coerente com a Home */}
                  <s.icon
                    className="h-8 w-8 text-orange-700 dark:text-orange-500 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.4}
                  />

                  {/* Título adaptável */}
                  <h3 className="mt-6 sm:mt-8 font-display text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {s.title}
                  </h3>

                  {/* Descrição adaptável */}
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 font-medium dark:font-normal">
                    {s.desc}
                  </p>
                </div>

                {/* Numeração em tom sutil */}
                <div className="mt-6 sm:mt-8 text-xs tabular-nums tracking-widest text-zinc-400 dark:text-zinc-500 font-mono font-semibold">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
