import Container from "@/components/common/Container";
import React from "react";

const data = [
  {
    id: 1,
    pic: "/heropic.jpg",
    title: "Web UI Design",
    description: "Createive UI Design",
  },
  {
    id: 1,
    pic: "/heropic.jpg",
    title: "To Design Digital Strategy",
    description: "Social Media Marketing",
  },
  {
    id: 1,
    pic: "/heropic.jpg",
    title: "UI Design",
    description: "Createive Rebranding for Logo",
  },
  { id: 1, pic: "/heropic.jpg", title: "Web UI Dev", description: "Logo" },
];

const Showcase = () => {
  return (
    <Container>
      <h1 className="text-4xl lg:text-h1">Recent Showcase</h1>
    </Container>
  );
};

export default Showcase;
