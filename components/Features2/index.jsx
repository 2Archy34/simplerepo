
import SingleFeature from "./SingleFeature2";
import featuresData2 from "./featuresData2";

const Features2 = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-14"
      >
        <div className="container">
          <h3
            title="Generate code in any programming language"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData2.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features2;
