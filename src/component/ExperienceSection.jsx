
const experience = [
    {

    }
]
export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Admin Support – Digital Marketing",
      company: "PT Sentra Vidya Utama",
      date: "January 2023 – April 2023",
      location: "Surabaya, Indonesia",
      points: [
        "Contributed to smooth company operations through timely and accurate data entry and integration.",
        "Wrote article content for the Maukuliah website.",
        "Developed a content plan as a guide for social media content production.",
        "Conducted content research and identified engaging weekly topics.",
      ],
    },
    {
      title: "Admin Support – Data Management",
      company: "PT Telkom Indonesia Plasa Malang",
      date: "June 2021 – November 2021",
      location: "Malang, Indonesia",
      points: [
        "Responsible for revising and verifying Valins data with 100% accuracy, ensuring all changes were well-documented and aligned with company standards.",
        "Aligned Port OLT data in Oracle UIM and NOSS F systems to ensure consistency and accuracy based on field conditions.",
        "Managed customer complaint ticket closures by accurately documenting all related information and actions.",
      ],
    },
    {
      title: "Admin Support – Data Management",
      company: "PT Telkom Indonesia Witel Sidoarjo",
      date: "Maret 2020",
      location: "Sidoarjo, Indonesia",
      points: [
        "Ensured customer data accuracy by making adjustments to correct discrepancies in the company database.",
        "Aligned Port OLT data in Oracle UIM and NOSS F systems to reflect real field conditions.",
        "Handled customer complaint ticket closures with complete and accurate documentation.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <span className="text-sm text-muted-foreground">{exp.date}</span>
              </div>
              <p className="text-sm text-foreground/80 font-medium mb-2">
                {exp.company} – {exp.location}
              </p>
             <ul className="list-disc pl-5 space-y-1 text-sm text-foreground/70 text-left">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
