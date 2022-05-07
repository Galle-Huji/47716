import { List } from "@mui/material";
import UserCards from "../Components/UserCards";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
function Browse() {
  const [CardsData, setCardsData] = useState([]); //this method will load actual data with fetch in the future
  useEffect(() => {
    getCardsData();
  }, []);

  const getCardsData = async () => {
    const response = await fetch(`./FakeData/CardsData.json`);
    const data = await response.json();
    setCardsData(data.Cards);
  };
  console.log(CardsData);

  return (
    <div>
      <Box
        sx={{
          // TODO responsive
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {},
        }}
      >
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            align: "center",
          }}
        >
          {CardsData.map((card) => (
            <div key={card.Id}>
              <UserCards
                Name={card.UserName}
                Age={card.Age}
                LastSeen={card.LastSeen}
                ProfilePicture={card.ProfilePicture}
                Activities={card.Activities}
                Id={card.Id}
              />
              <br />
            </div>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default Browse;
