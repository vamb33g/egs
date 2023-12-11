import Image from 'next/image';

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">L'Essentiel du Style Masculin</h2>
            <p className="text-xl text-gray-600">
              Notre salon offre une approche moderne de la coiffure masculine, alliant technique et
              détente pour chaque client.
            </p>
          </div>
          <div className="max-w-3xl mx-auto text-center underline mb-10">
            <h2 className="h2 mb-4">Notre carte</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none shadow-sm">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Coupe + Barbe</h4>
              <p className="text-gray-600 text-center">22€</p>
              <Image
                src={'/images/ciseaux2.png'}
                alt="ciseau"
                width={100}
                height={100}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Coupe</h4>
              <p className="text-gray-600 text-center">17€</p>
            </div>

            {/* 2nd item */}

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Barbe</h4>
              <p className="text-gray-600 text-center">19€</p>
              <Image
                src={'/images/tondeuse.png'}
                alt="ciseau"
                width={109}
                height={100}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Contour</h4>
              <p className="text-gray-600 text-center">9€</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Black Masque</h4>
              <p className="text-gray-600 text-center">10€</p>
              <Image
                src={'/images/logobarber.png'}
                alt="ciseau"
                width={90}
                height={250}
              />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Shampoing détente
              </h4>
              <p className="text-gray-600 text-center">3€</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
