import { Link } from "react-router-dom";

export default function Athletes() {
  const athletes = [
    {
      name: "Armand “Mondo” Duplantis",
      discipline: "Pole vault",
      country: "SE",
    },
    { name: "Sarah Sjöström", discipline: "SWIMMING", country: "SE" },
    {
      name: "Jakob Ingebrigtsen",
      discipline: "1500m / 3000m / 5000m",
      country: "NO",
    },
    { name: "Sandra Elkasević", discipline: "Discus throw", country: "HR" },
    { name: "Ivana Španović", discipline: "Long jump", country: "RS" },
    { name: "Mutaz Barshim", discipline: "High jump", country: "QA" },
    { name: "Nicola Olyslagers", discipline: "High jump", country: "AU" },
    { name: "Rhasidat Adeleke", discipline: "200m/400m", country: "IE" },
    {
      name: "Andreas Almgren",
      discipline: "1500m/ 5000m/ 10000m",
      country: "SE",
    },
    { name: "Andreas Kramer", discipline: "800m", country: "SE" },
    { name: "Khaddi Sagnia", discipline: "Long Jump", country: "SE" },
    { name: "Thobias Montler", discipline: "Long jump", country: "SE" },
    {
      name: "Karoline Bjerkeli Grøvdal",
      discipline: "1500m / 5000m / 10000m",
      country: "NO",
    },
    { name: "Vanessa Kamga", discipline: "Discus throw", country: "SE" },
    { name: "Abderrahman Samba", discipline: "400mH", country: "QA" },
    { name: "Filip Ingebrigtsen", discipline: "1500m / 5000m", country: "NO" },
    { name: "Erik Erlandsson", discipline: "100m / 200m", country: "SE" },
    { name: "Engla Nilsson", discipline: "High Jump", country: "SE" },
    { name: "Thea Löfman", discipline: "Hammer Throw", country: "SE" },
    { name: "Thomas Röhler", discipline: "Javelin throw", country: "DE" },
    { name: "Moa Granat", discipline: "400mH", country: "SE" },
    { name: "Melwin Lycke Holm", discipline: "High Jump", country: "SE" },
    {
      name: "William Trulsson",
      discipline: "100m / 200m / 400m",
      country: "SE",
    },
    {
      name: "Henrik Ingebrigtsen",
      discipline: "1500m / 5000m / 10000m",
      country: "NO",
    },
    { name: "Vidar Johansson", discipline: "3000mSC", country: "SE" },
    { name: "Henrik Larsson", discipline: "100 m / 200m", country: "SE" },
    { name: "Carl Bengtström", discipline: "400mH", country: "SE" },
    { name: "Kim Amb", discipline: "Javelin throw", country: "SE" },
    {
      name: "Maja Åskag",
      discipline: "Long jump / Triple jump",
      country: "SE",
    },
    { name: "Julia Henriksson", discipline: "100m / 200m", country: "SE" },
    { name: "Hedda Hynne", discipline: "800m", country: "NO" },
    { name: "Tilde Johansson", discipline: "Long jump", country: "SE" },
    { name: "Wictor Petersson", discipline: "Shot put", country: "SE" },
  ];

  function toSlug(name) {
    return name
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .toLowerCase()
      .replace(/“|”|"/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function codeToFlagEmoji(code) {
    const base = 127397; // '🇦'.codePointAt(0) - 'A'.codePointAt(0)
    return code
      .toUpperCase()
      .split("")
      .map((c) => String.fromCodePoint(base + c.charCodeAt(0)))
      .join("");
  }

  const fallbackImg =
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop";

  return (
    <main className="athletes-page">
      <section className="athletes">
        <div className="container">
          <h1 className="page-title">Athletes</h1>
          <div className="athletes-grid">
            {athletes.map((a) => {
              const slug = toSlug(a.name);
              const src = `/athletes/${slug}.jpg`;
              const flag = codeToFlagEmoji(a.country);
              return (
                <Link
                  key={a.name}
                  to={`/athletes/${slug}`}
                  className="athlete-card athlete-card--row"
                >
                  <div className="athlete-media">
                    <img
                      src={src}
                      alt={a.name}
                      onError={(e) => {
                        if (e.currentTarget.src !== fallbackImg)
                          e.currentTarget.src = fallbackImg;
                      }}
                    />
                  </div>
                  <div className="athlete-info">
                    <div className="athlete-flag" aria-hidden="true">
                      {flag}
                    </div>
                    <h2>{a.name}</h2>
                    <p className="athlete-discipline">{a.discipline}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
