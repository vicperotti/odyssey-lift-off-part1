import React, { useState } from 'react'
import { ADD_AUTHOR, ADD_QUOTE } from './mutations';
// import {
//     Button,
//     TextField
// } from "@mui/material";
import { useMutation } from '@apollo/client';


export const AddAuthor = () => {

    const [authorInput, setAuthorInput] = useState({ name: "", photo: "" })

    const [addAuthor, result] = useMutation(ADD_AUTHOR, {
        refetchQueries: ["GET_QUOTES"],
        variables: {
            input: {
                ...authorInput
            }
        },
        errorPolicy: "all",
    });

    return (
        <>
            <div>add an Author</div>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    console.log(authorInput);
                    addAuthor();
                    console.log(result);
                }}
            >
                <input
                    name="name"
                    label="author name"
                    type="text"
                    onChange={e => (setAuthorInput({ ...authorInput, name: e.target.value }))} />

                <input
                    name="photo"
                    label="author image url"
                    type="text"
                    onChange={e => (setAuthorInput({ ...authorInput, photo: e.target.value }))} />

                <input type="submit" />

            </form>
            <a href="/">Back to list of Quotes!</a>
        </>
    )


}
