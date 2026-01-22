import React from "react";

type LayoutMainProps = {
    children: React.ReactNode;
};

const LayoutMain = ({ children }: LayoutMainProps) => {
    return (
        <main>
            {children}
        </main>
    );
}

export default LayoutMain