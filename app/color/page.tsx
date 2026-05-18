import Link from "next/link";

const variants = [
  {
    slug: "magenta",
    name: "Plasma Magenta",
    hex: "#FF006E",
    description: "Punk-magenta, ярко-розовый. Сохраняет розовый характер хрома и усиливает его.",
  },
  {
    slug: "sapphire",
    name: "Electric Sapphire",
    hex: "#3D5AFE",
    description: "Электрик-синий индиго. Премиальный tech-вайб, спокойнее остальных.",
  },
  {
    slug: "violet",
    name: "Deep Violet",
    hex: "#7B2CBF",
    description: "Глубокий фиолетовый. Royal, premium, mysterious.",
  },
];

export default function ColorIndex() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl">
        <h1 className="font-mono text-[11px] uppercase tracking-[0.2em] text-meta mb-12 text-center">
          HΞPTRΛI · Color variants
        </h1>

        <ul className="flex flex-col gap-3">
          {variants.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/color/${v.slug}`}
                className="group flex items-center gap-4 p-5 border border-line rounded-lg hover:border-accent transition-colors"
              >
                <span
                  className="block w-12 h-12 rounded-md shrink-0 shadow-inner"
                  style={{ background: v.hex }}
                  aria-hidden="true"
                />
                <span className="flex-1 min-w-0">
                  <span className="block font-mono text-[16px] text-foreground group-hover:text-accent transition-colors">
                    {v.name}
                  </span>
                  <span className="block font-mono text-[11px] text-meta mt-0.5">
                    {v.hex} · {v.description}
                  </span>
                </span>
                <span className="font-mono text-[14px] text-meta group-hover:text-accent transition-colors">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="font-mono text-[11px] text-meta mt-12 text-center leading-relaxed">
          Открой каждый вариант в отдельной вкладке и сравни.
          <br />
          Когда выберешь — скажи slug, применю на главную.
        </p>
      </div>
    </main>
  );
}
