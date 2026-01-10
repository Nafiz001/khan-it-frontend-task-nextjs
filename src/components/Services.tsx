export default function Services() {
  const services = [
    {
      icon: "manage_search",
      title: "SEO Service",
      description: "Improve Google rankings and gain consistent, long-term traffic.",
      color: "blue",
      featured: true,
    },
    {
      icon: "web",
      title: "Web Design",
      description: "Create websites that convert visitors into customers.",
      color: "orange",
      featured: false,
    },
    {
      icon: "campaign",
      title: "Facebook Ads",
      description: "Connect with your target audience on their preferred platforms.",
      color: "blue",
      featured: false,
    },
    {
      icon: "ads_click",
      title: "Google Ads",
      description: "Reach customers actively searching for your services.",
      color: "green",
      featured: false,
    },
    {
      icon: "edit_note",
      title: "Content Writing",
      description: "Build trust and improve Google rankings with compelling content.",
      color: "indigo",
      featured: false,
    },
    {
      icon: "campaign",
      title: "Branding",
      description: "Differentiate your business and build customer loyalty.",
      color: "yellow",
      featured: false,
    },
    {
      icon: "design_services",
      title: "UI/UX Design",
      description: "Design user experiences that increase Conversions.",
      color: "purple",
      featured: false,
    },
    {
      icon: "palette",
      title: "Graphic Design",
      description: "Develop professional visuals to enhance trust and credibility.",
      color: "pink",
      featured: false,
    },
  ];

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "text-blue-500",
      orange: "text-orange-500",
      green: "text-green-500",
      indigo: "text-indigo-500",
      yellow: "text-yellow-500",
      purple: "text-purple-500",
      pink: "text-pink-500",
    };
    return colors[color] || "text-blue-500";
  };

  return (
    <section className="py-12">
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6">
          Our Services
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Full-stack Digital Marketing Services
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          We manage your complete digital presence so you can focus on your core business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 md:p-8 border hover:shadow-lg transition-all duration-300 group cursor-pointer ${
              service.featured
                ? "bg-blue-50/50 dark:bg-blue-900/20 border-blue-400 dark:border-blue-600"
                : "bg-white dark:bg-slate-800 border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800"
            }`}
          >
            <div className="w-14 h-14 mb-6 relative">
              <span className={`material-symbols-outlined ${getIconColor(service.color)} text-5xl`}>
                {service.icon}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
