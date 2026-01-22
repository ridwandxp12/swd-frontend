import React from "react";

type LayoutMainProps = {
    children: React.ReactNode;
};

const LayoutMain = ({ children }: LayoutMainProps) => {
    return (
        <div className="background">
            {children}
        </div>
    );
}
export default LayoutMain
