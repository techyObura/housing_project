import { FaBed, FaBath, FaHeart, FaStar } from "react-icons/fa";
import { useState } from "react";

const ListingCard = ({ listing }) => {
  const [likes, setLikes] = useState(listing.likes.length);
  const firstMedia =
    listing.media && listing.media.length > 0 ? listing.media[0] : null;

  // Calculate average rating
  const avgRating =
    listing.ratings.length > 0
      ? (
          listing.ratings.reduce((sum, r) => sum + r.rating, 0) /
          listing.ratings.length
        ).toFixed(1)
      : null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <div className="relative h-52 w-full">
        {/* Media */}
        {firstMedia && firstMedia.type === "image" && (
          <img
            src={firstMedia.url}
            alt={listing.title}
            className="w-full h-48 object-cover"
          />
        )}
        {firstMedia && firstMedia.type === "video" && (
          <video
            src={firstMedia.url}
            className="w-full h-48 object-cover"
            muted
            controls
            poster={firstMedia.poster || "/video-poster.jpg"}
          />
        )}
        <div className="absolute top-2 right-2 flex items-center space-x-1 bg-white/80 rounded-full px-3 py-1 text-[var(--color-red-error)] font-semibold text-sm cursor-pointer">
          <FaHeart className="mr-1" /> {likes}
        </div>
      </div>

      {/* Details */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold text-[var(--color-gray-dark)]">
          {listing.title}
        </h3>
        <p className="text-[var(--color-gray-dark)] font-semibold">
          KES {listing.price.toLocaleString()}
        </p>
        <p className="text-sm text-gray-500">{listing.location}</p>

        {/* Beds & Baths */}
        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex items-center space-x-1">
            <FaBed className="text-[var(--color-blue-primary)]" />
            <span>
              {listing.beds} Bed{listing.beds !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <FaBath className="text-[var(--color-teal-secondary)]" />
            <span>
              {listing.baths} Bath{listing.baths !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Ratings */}
        {avgRating && (
          <div className="flex items-center space-x-1 text-yellow-500 font-semibold mt-2">
            <FaStar />
            <span>{avgRating}</span>
            <span className="text-gray-500 font-normal">
              ({listing.ratings.length} reviews)
            </span>
          </div>
        )}

        {/* Comments Preview */}
        {listing.comments.length > 0 && (
          <div className="mt-2 text-sm text-gray-600">
            <p>
              <span className="font-semibold">
                {listing.comments[0].userId}:
              </span>{" "}
              {listing.comments[0].text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
