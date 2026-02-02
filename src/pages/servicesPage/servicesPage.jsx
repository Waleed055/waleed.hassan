import "./servicesPage.css"
import NativeAppCard from "../../components/nativeAppCard/nativeAppCard";
import HybridAppCard from "../../components/hybridAppcard/hybridAppCard";
import ServicesHeader from "../../components/servicesheader/servicesHeader";

export default function Services() {
  return (
    <div className="service">
      <div className="apps">
        <ServicesHeader />

        <div className="services-flex">
          <NativeAppCard />
          <HybridAppCard />
        </div>

      </div>
    </div>
  );
}
