import React, { useState } from "react";

import BuyProductModal from "../modal/buyProduct";

const ProductCard = ({ imageUrl, judul, title }) => {
  const [openModal, setOpenModal] = useState(false);

  const openModalProduct = () => {
    setOpenModal(true);
  };
  const closeModalProduct = () => {
    setOpenModal(false);
  };

  return (
    <div className="max-w-[10rem] bg-white rounded-lg shadow-md overflow-hidden">
      <img className=" h-full w-40 object-contain" src={imageUrl} alt={judul} />
      <div className="p-4">
        <p className="text-base font-bold text-gray-700">{title}</p>
      </div>
      <button
        onClick={openModalProduct}
        className="w-full bg-blue-500 text-white py-2"
      >
        Buy
      </button>
      <BuyProductModal isOpen={openModal} onClose={closeModalProduct}>
        <h3 className="text-xl font-bold text-gray-800">{judul}</h3>
        <img
          className="w-full object-contain mb-4"
          src={imageUrl}
          alt={judul}
        />
        <p className="text-gray-600">
          This is a detailed description of the product.
        </p>
        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white py-2 rounded">
            Yakin, Beli Sekarang
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={closeModalProduct}
            className="w-full bg-red-500 text-white py-2 rounded"
          >
            Tidak
          </button>
        </div>
      </BuyProductModal>
    </div>
  );
};

export default ProductCard;
