import React from "react";

const ServicesOverview = () => {
  return (
    <section id="services" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mt-4">Nettoyage</h3>
            <p className="mt-2 text-gray-600">
              Service de nettoyage professionnel pour votre maison ou bureau.
            </p>
            <a
              href="/services/cleaning"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
