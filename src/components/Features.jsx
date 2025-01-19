import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Share team inboxes",
      description: "Our shared team inboxes keep everyone on the same page and in the loop.",
      icon: "fa fa-comment"  // Font Awesome inbox icon
    },
    {
      title: "Deliver instant answers",
      description: "A customer service platform that helps you balance everything customers need.",
      icon: "fas fa-bolt"  // Font Awesome bolt icon
    },
    {
      title: "Manage your team with reports",
      description: "Measure what matters with our easy-to-use reports and analytics.",
      icon: "fas fa-chart-line"  // Font Awesome chart line icon
    },
    {
      title: "Connect with customers",
      description: "Solve problems or close sales in real-time with seamless chat routing.",
      icon: "fas fa-comments"  // Font Awesome comments icon
    },
    {
      title: "Connect the tools you already use",
      description: "Explore 100+ integrations that make your workflow efficient.",
      icon: "fas fa-plug"  // Font Awesome plug icon
    },
    {
      title: "Our people make the difference",
      description: "We extend your service team, available 24/7 when needed.",
      icon: "fas fa-users"  // Font Awesome users icon
    }
  ];
  
    return (
      <section className="text-center p-20 bg-white">
        <h2 className="text-red-500 font-semibold">Features</h2>
        <h3 className="text-2xl md:text-4xl font-bold mt-2 text-black">Analytics that feels like it’s from the future</h3>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg shadow-sm">
             <span className="text-3xl border border-gray-300 rounded-lg px-2">
  <i className={`${feature.icon} text-3xl text-black`}></i>
</span>

              <h4 className="text-lg text-black mt-3  font-semibold">{feature.title}</h4>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default Features;
  