import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`https://my-books-resale-server.vercel.app/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};

export default useSeller;
