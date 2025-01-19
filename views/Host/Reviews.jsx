import React from "react";
import { Link } from "react-router-dom";
import star from "../../images/Star.svg";
import reviewsChart from "../../images/reviews-chart.svg";

function Rating({ rating }) {
  console.log(rating);
  return (
    <div>
      {[...Array(rating)].map((_, index) => (
        <img key={index} src={star} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <section className="host-reviews-section">
      <header>
        <h2>Your reviews</h2>
        <span>
          Last{" "}
          <Link to="/host/reviews" className="filter-link">
            30 days
          </Link>
        </span>
      </header>

      <img src={reviewsChart} alt="Reviews chart" width="100%" />

      <ul className="reviews-list">
        {reviewsData.map((review) => (
          <li key={review.id} className="review">
            <Rating rating={review.rating} />
            <p className="review-meta">
              <span className="review-name">{review.name}</span>
              <span className="review-date">{review.date}</span>
            </p>
            <p>{review.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
