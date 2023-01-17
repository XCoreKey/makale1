import { createContext, useState, useContext } from "react";

const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
	const [comments, setComments] = useState([
		{ comments: "Çok güzel bir makale" },
		{ comments: " Katılıyorum Çok güzel bir makale" }
	]);

	const values = {
		comments,
		setComments,
	};

	return <CommentContext.Provider value={values}>{children}</CommentContext.Provider>;
};

export const useComment = () => useContext(CommentContext);