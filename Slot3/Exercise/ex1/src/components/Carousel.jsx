import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { banners } from "../data/banners";

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
        ride="carousel"
        pause={false}
      >
        {banners.map((banner, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={banner.src}
              alt={banner.title}
              style={{
                height: "500px",
                objectFit: "cover",
              }}
            />
            <Carousel.Caption>
              <h3>{banner.title}</h3>
              <p>{banner.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;