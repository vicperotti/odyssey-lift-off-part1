//import { quotes } from "../data/quotes.js";
import { Quote, Author } from "./models.js";

export const  resolvers = {
  Query: {
    quotes: async (parent, args) => {
      return await Quote.findAll({
        include: Author,
        order: [["quotetext"]],
      });
    },
    quote: async (parent, args) => {
      return await Quote.findByPk(args.id, {
        include: Author,
      });
    },
    authors: async () => {
      return await Author.findAll({ include: Quote });
    },
  },
  Mutation: {
    addQuote: async (_, { input }) => {
        await Quote.create({
            ...input
        });
        return {
            success: true,
            Errors:null
        };
        
    },
    addAuthor: async (_, { input }) => {
      await Author.create({
          ...input
      });
      return {
          success: true,
          Errors:null
      };
  },
//   addQuoteAndAuthor: async (_, { input }) => {
//     await Author.create({
//         ...input
//     });
//     return {
//         success: true,
//         Errors:null
//     };
// },
}
};