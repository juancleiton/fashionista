import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { uuid } from "uuidv4";

import * as S from "./styles";

export default function Search() {
  const [productStored, setProductStored] = useState([]);

  const products = useSelector((state) => state.products.products);

  const handleProductsFiltered = useCallback(
    (e) => {
      const word = e.target.value.toUpperCase();

      if (word.length <= 0) {
        return setProductStored([]);
      }

      const filteredResults = products.filter((p) => {
        const productToSearch = p.name.toUpperCase();

        return productToSearch ? p.name.includes(word) : null;
      });

      return setProductStored(filteredResults);
    },
    [products]
  );

  return (
    <>
      <S.SeachForm>
        <input
          type="text"
          placeholder="Digite o nome do produto"
          onChange={handleProductsFiltered}
        />
      </S.SeachForm>

      <S.Content>
        {productStored.length >= 1 &&
          productStored.map((product) => (
            <S.Item key={uuid()}>
              <S.Row>
                {product.image ? (
                  <img src={product.image} alt={product.name} />
                ) : (
                  <img
                    src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                    alt={product.name}
                  />
                )}

                <div className="product__list__info">
                  <p className="title">{product.name}</p>
                </div>

                <div className="product__list__prices">
                  <p className="current">{product.actual_price}</p>
                  <p className="installments">{product.installments}</p>
                </div>
              </S.Row>
            </S.Item>
          ))}
      </S.Content>

      {productStored.length <= 0 && (
        <S.SearchEmpty>
          <h1>Procure um produto</h1>
        </S.SearchEmpty>
      )}
    </>
  );
}
