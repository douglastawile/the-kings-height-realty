import { Card, Tabs } from "flowbite-react";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = `Services | The Kings Height Realty`;

    return () => {
      document.title = `The Kings Height Realty`;
    };
  }, []);

  return (
    <main className="dark:bg-gray-800">
      <header>
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Our Services
        </h1>
      </header>

      <section className="flex flex-wrap justify-center items-center rounded-lg">
        <Card className="max-w-xl mx-2 my-4 sm:max-w-xl">
          <img
            className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800"
            src="/details.jpg"
            alt="image description"
          />
        </Card>
      </section>

      <section>
        <Card className="rounded-lg shadow-lg mb-16 p-2">
          <Tabs aria-label="Our Services" variant="pills">
            {[
              {
                title: "Real Estate Agency",
                images: Array.from(
                  { length: 7 },
                  (_, i) => `structure/structure-${i + 1}.jpg`
                ),
              },
              {
                title: "Building and Construction",
                images: Array.from(
                  { length: 10 },
                  (_, i) => `construction/construction-${i + 1}.jpg`
                ),
              },
              {
                title: "Land Planning",
                images: Array.from(
                  { length: 9 },
                  (_, i) => `planning/plan-${i + 1}.jpg`
                ),
              },
              {
                title: "Interior Designs",
                images: Array.from(
                  { length: 8 },
                  (_, i) => `design/design-${i + 1}.jpg`
                ),
              },
              {
                title: "Land Surveying and Mapping",
                images: Array.from(
                  { length: 3 },
                  (_, i) => `survey/survey-${i + 1}.jpg`
                ),
              },
            ].map(({ title, images }, tabIndex) => (
              <Tabs.Item key={tabIndex} title={title}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {images.map((src, imgIndex) => (
                    <div key={imgIndex}>
                      <img
                        className="h-auto max-w-full rounded-lg"
                        src={src}
                        alt={`${title} example ${imgIndex + 1}`}
                        aria-label={`${title} example ${imgIndex + 1}`}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </Tabs.Item>
            ))}
          </Tabs>
        </Card>
      </section>
    </main>
  );
};

export default Services;
