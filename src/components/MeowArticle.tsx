'use client';
import React, { useEffect, useState } from 'react';

type Props = {
  styles: any;
};

export default function MeowArticle({ styles }: Props) {
  const [text, setText] = useState();
  useEffect(() => {
    const res = fetch('https://meowfacts.herokuapp.com')
      .then((response) => {
        return response.json();
      })
      .then((data) => setText(data.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
