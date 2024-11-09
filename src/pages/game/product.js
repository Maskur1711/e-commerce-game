import React from "react";

import BaseCard from "../../components/card/baseCard";

// Assets
import pubg from "../../assets/pubg.jpeg";

const product = () => {
  return (
    <div>
      <h1>Product Game</h1>
      <hr className="my-2 border-gray-300" />
      <div className="p-4">
        <BaseCard
          title="PlayerUnknown's Battlegrounds"
          judul="PUBG"
          imageUrl={pubg}
        />
      </div>
    </div>
  );
};

export default product;
