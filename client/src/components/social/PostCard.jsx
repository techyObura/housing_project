import { FaHeart, FaComment } from "react-icons/fa";

const PostCard = ({ post, users }) => {
  // Find user info from users array
  const user = users.find((u) => u.id === post.userId);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 hover:shadow-lg transition">
      {/* User Info */}
      <div className="flex items-center space-x-3 mb-2">
        <img
          src={user?.avatar || "/default-avatar.png"}
          alt={user?.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-[var(--color-gray-dark)]">
            {user?.name}
          </p>
          <p className="text-xs text-gray-400">
            {new Date(post.timestamp).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="text-[var(--color-gray-dark)] mb-3">{post.content}</p>

      {/* Likes & Comments */}
      <div className="flex items-center space-x-4 text-gray-500 text-sm">
        <div className="flex items-center space-x-1 cursor-pointer hover:text-[var(--color-red-error)]">
          <FaHeart />
          <span>{post.likes}</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:text-[var(--color-blue-primary)]">
          <FaComment />
          <span>{post.comments.length}</span>
        </div>
      </div>

      {/* First Comment Preview */}
      {post.comments.length > 0 && (
        <div className="mt-2 text-sm text-gray-600 border-t pt-2">
          <p>
            <span className="font-semibold">
              {users.find((u) => u.id === post.comments[0].userId)?.name ||
                "User"}
              :
            </span>{" "}
            {post.comments[0].text}
          </p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
