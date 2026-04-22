import { use, useEffect, useState } from "react";
import { getBookmarkedPosts, bookmarkPost, unbookmarkPost } from "../api/bookmarkApi"

export const useBookmark = () => {

  const [bookmarks, setBookmarks] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookmarks = async () => {
      setLoading(true);
      const bookmarks = await getBookmarkedPosts();
      const ids = bookmarks.map((b: any) => b.id);
      console.log("Fetched bookmarks:", ids);
      setBookmarks(ids);
    }
    fetchBookmarks();
  }, []);
  return {bookmarks}
  
}