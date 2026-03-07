import React from "react";
import { Card, Stack } from "react-bootstrap";
import "../Cards/card.css"


const ProductCard = ({ val }) => {
  return (
    <Card className="rounded-2 shadow-sm popular h-100">
      <a href={val.externalLink} target="_blank" rel="noreferrer" className="text-decoration-none text-dark">
        <Card.Img
          variant="top"
          src={val.image}
          className="img-fluid"
          alt={"image"}
        />
        <Card.Body>
          <Card.Text>
            <i className="bi bi-geo-alt text-primary"></i>
            <span className="text ms-1">{val.location}</span>
          </Card.Text>
          <Card.Title className="fw-bold"> {val.title} </Card.Title>
          <p className="reviwe">
            <span>
              <i className="bi bi-star-fill text-warning me-1"></i>
            </span>
            <span>{val.rating} </span>
            <span>( {val.reviews} reviews )</span>
          </p>
          <div className="mb-3">
            {val.category.map((cat, index) => {
              return (
                <span key={index} className={cat.replace(/ .*/, "") + " badge me-1"}>
                  {cat}
                </span>
              );
            })}
          </div>
          <button className="primaryBtn w-100 border-0 py-2">View Details</button>
        </Card.Body>
      </a>

      <Card.Footer className="py-4">
        {val.afterDiscount ? (
          <p className="text-decoration-line-through">
            {" "}
            ${val.price.toFixed(2)}
          </p>
        ) : (
          ""
        )}

        <Stack direction="horizontal" className="justify-content-between  mt-3">
          <p>
            From{" "}
            <b>
              {val.afterDiscount
                ? '$' + val.afterDiscount.toFixed(2)
                : '$' + val.price.toFixed(2)}
            </b>
          </p>
          <p>
            <i className="bi bi-clock"></i> {val.days}
          </p>
        </Stack>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
