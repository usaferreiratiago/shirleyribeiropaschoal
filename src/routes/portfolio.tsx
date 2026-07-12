import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import a1 from "@/assets/aval-1.png";
import a2 from "@/assets/aval-2.png";
import a3 from "@/assets/aval-3.png";
import a4 from "@/assets/aval-4.png";
import a5 from "@/assets/aval-5.png";
import { PageHeader } from "@/components/page-header";

// Importação da logo utilizando o caminho relativo do projeto
import logoImg from "@/assets/senoengenharia.png";

// Rota adicionada explicitamente para resolver o erro do TS
export const Route = createFileRoute()({
  head: () => ({
    meta: [
      { title: "Portfolio — Shirley Ribeiro Paschoal" },
      {
        name: "description",
        content: "Portfólio de Shirley Ribeiro Paschoal.",
      },
      { property: "og:title", content: "portfolio — Shirley Ribeiro Paschoal" },
      {
        property: "og:description",
        content: "Portfólio que se mede em anos de experiência.",
      },
    ],
  }),
  component: Portfolio,
});

// Mock com a lista de portfolio
const allProjects = [
  {
    img: a1,
    title: "Terapia para adultos",
    type: "Terapia para adultos",
    valor: "R$ - Valor",
  },
  {
    img: a2,
    title: "Terapia para crianças e adolescentes",
    type: "Terapia para crianças e adolescentes",
    valor: "R$ - Valor",
  },
  {
    img: a3,
    title: "Avaliação Neuropsicológica",
    type: "Avaliação Neuropsicológica",
    valor: "R$ - Valor",
  },
  {
    img: a4,
    title: "Palestras em Escolas",
    type: "Palestras em Escolas",
    valor: "R$ - Valor",
  },
  {
    img: a5,
    title: "Vamos trabalhar juntos?",
    type: "Vamos trabalhar juntos?",
    valor: "Contate-me",
  },
];

const ITEMS_PER_PAGE = 5;

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allProjects.length / ITEMS_PER_PAGE);

  // Calcula quais projetos exibir na página atual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = allProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

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
          ></motion.div>
        </div>
      </div>

      <PageHeader
        eyebrow="— 03 / Portfolio"
        title="Portfólio que se mede em anos de experiência."
        intro="Uma seleção de nossa história recente. Cada atendimento carrega o mesmo cuidado técnico, acolhimento e empatia."
      />

      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Listagem de portfolio com divisores adaptáveis */}
          <div className="space-y-px bg-zinc-100 dark:bg-zinc-900">
            {currentProjects.map((p, i) => {
              const globalIndex = startIndex + i + 1;
              const formattedIndex =
                globalIndex < 10 ? `0${globalIndex}` : globalIndex;

              return (
                <motion.div
                  key={`${p.title}-${globalIndex}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="grid grid-cols-12 items-center gap-4 sm:gap-6 bg-white dark:bg-zinc-950 py-6 sm:py-8 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
                >
                  {/* Coluna da Imagem */}
                  <div className="col-span-12 md:col-span-5">
                    <div className="overflow-hidden rounded-sm bg-zinc-100 dark:bg-zinc-900">
                      <img
                        src={p.img}
                        alt={p.title}
                        loading="lazy"
                        className="aspect-4/3 w-full object-cover transition duration-500 transform hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  {/* Coluna do Número */}
                  <div className="col-span-3 md:col-span-1 order-1 md:order-0 mt-2 md:mt-0">
                    <div className="text-xs tabular-nums tracking-widest text-zinc-400 dark:text-zinc-500 font-mono font-semibold">
                      {formattedIndex}
                    </div>
                  </div>

                  {/* Coluna do Título e Tipo */}
                  <div className="col-span-12 md:col-span-4 mt-2 md:mt-0">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl tracking-tight">
                      {p.title}
                    </h3>
                    <div className="mt-1 sm:mt-2 text-sm text-zinc-500 dark:text-zinc-400 font-medium dark:font-normal">
                      {p.type}
                    </div>
                  </div>

                  {/* Coluna do Ano e Link */}
                  <div className="col-span-9 md:col-span-2 flex items-center justify-between gap-4 order-2 md:order-0 mt-2 md:mt-0 justify-self-end md:justify-self-auto w-full md:w-auto">
                    <div className="font-display text-xl sm:text-2xl font-medium text-zinc-400 dark:text-zinc-500 font-mono">
                      {p.valor}
                    </div>
                    <Link
                      to="/contato"
                      aria-label="Falar sobre obra similar"
                      className="p-2 -mr-2"
                    >
                      <ArrowUpRight className="h-6 w-6 text-zinc-800 dark:text-zinc-200 transition hover:text-orange-700 dark:hover:text-orange-500 hover:translate-x-0.5 hover:-translate-y-0.5 transform duration-200" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Paginação */}
          <div className="mt-12 sm:mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-zinc-200 dark:border-zinc-800 pt-6">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium text-center sm:text-left">
              Mostrando{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {startIndex + 1}
              </span>{" "}
              a{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {Math.min(startIndex + ITEMS_PER_PAGE, allProjects.length)}
              </span>{" "}
              de{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                {allProjects.length}
              </span>{" "}
              portfolio
            </div>

            <div className="flex items-center justify-center gap-2 self-center sm:self-auto overflow-x-auto max-w-full py-1">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 transition hover:bg-zinc-50 dark:hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex gap-1 overflow-x-auto dynamic-scrollbar">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`h-10 w-10 shrink-0 text-sm font-semibold rounded-md transition cursor-pointer ${
                      currentPage === index + 1
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                        : "border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 transition hover:bg-zinc-50 dark:hover:bg-zinc-900 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed"
                aria-label="Próxima página"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
