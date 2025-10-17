import React from "react";
import Link from "next/link";

// <Link>
// <Image>

export function Header(){
    return (
        <header className="header-site">
            <div className="h-container">
                <div className="logo">
                    <h1>Meu Site</h1>
                </div>

                <nav className="navigation">
                    <Link href="./">Home</Link>
                    <Link href="./">Learn</Link>
                    <Link href="./">Contact</Link>
                </nav>

                <button className="cta">Action</button>
            </div>
        </header>
    );
}