import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { uuid } from "uuidv4";

import slugfy from "~/utils/slugfy";

import * as S from "./styles";

function Catalog() {
  const products = useSelector((state) => state.products.products);

  return (
    <S.Catalog>
      <S.Container>
        <h1>{products.length} items</h1>

        <S.List>
          {products.map((product) => (
            <S.Product key={uuid()}>
              <Link
                to={{
                  pathname: `/produto/${slugfy(product.name)}`,
                  state: product,
                }}
              >
                <figure>
                  <span>{product.discount_percentage}</span>

                  {product.image ? (
                    <img src={product.image} alt={product.name} />
                  ) : (
                    <img
                      src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indispon%C3%ADvel"
                      alt={product.name}
                    />
                  )}
                </figure>

                <h3>{product.name}</h3>

                <div>
                  {product.regular_price !== product.actual_price ? (
                    <span className="price--from">{product.regular_price}</span>
                  ) : null}

                  <span className="price--to">{product.actual_price}</span>
                </div>
              </Link>
            </S.Product>
          ))}
        </S.List>
      </S.Container>
    </S.Catalog>
  );
}

export default Catalog;
