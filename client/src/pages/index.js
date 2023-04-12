import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Quotes from './quotes';
import { AddAuthor } from './addAuthor';
import AuthorStuff from './authorStuff';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Quotes />} path="/" />
        <Route element={<AuthorStuff />} path="showAuthors"/>
        <Route element={<AddAuthor />} path="addAuthor" />
      </Routes>
    </BrowserRouter>
  );
}
