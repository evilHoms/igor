import { FC } from 'react';
import NextHead from "next/head";

const Head: FC = () => {
    return (
        <NextHead>
            <title>iTsiva Page</title>
            <link rel="icon" href="/favicon.ico" />
        </NextHead>
    );
}

export default Head;