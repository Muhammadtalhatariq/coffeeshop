import React from "react";
import Reservation from "../Reservation/page";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const team = [
  {
    id: 1,
    img: "/team-1.jpg",
    name: "Malissa Fie",
    position: "Senior Chef",
  },
  {
    id: 2,
    img: "/team-2.jpg",
    name: "Malissa Fie",
    position: "Senior Chef",
  },
  {
    id: 3,
    img: "/team-3.jpg",
    name: "Malissa Fie",
    position: "Senior Chef",
  },
  {
    id: 4,
    img: "/team-4.jpg",
    name: "Malissa Fie",
    position: "Senior Chef",
  },
];

const page = () => {
  return (
    <>
      <div
        className="text-white bg-neutral-900 w-full min-h-screen  py-32 p-4"
        id="Chefs"
      >
        <div>
          <h2 className="text-3xl text-green-500 pb-4 text-center">Chefs</h2>
          <h1 className="text-4xl font-normal leading-snug pb-6 text-center">
            Meet Our Experts
          </h1>
        </div>
        <div className="flex flex-wrap py-6 justify-center">
          {team.map((item, index) => (
            <Card
              key={index}
              className="bg-neutral-950 mx-3 rounded-xl hover:-translate-y-2 duration-1000 "
              sx={{ maxWidth: 300 }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="100"
                  image={item.img}
                  alt="green iguana"
                  className="z-10"
                />
                <CardContent className="border-b-4 border-green-500">
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-white font-serif text-center"
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text-green-500 text-center"
                  >
                    {item.position}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        
        <Reservation />
      </div>
    </>
  );
};

export default page;
