import React from "react";

interface ComposeProps {
    components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
    children: React.ReactNode
}

export type { ComposeProps };
